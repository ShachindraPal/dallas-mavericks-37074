import { useFocusEffect } from '@react-navigation/native';
import React, { ReactElement, useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import R from 'res';
import { useNetworkInfoState } from 'src/helper/NetworkProvider';
import useAppNavigator from 'src/navigation/useAppNavigator';
import { onClearError, selectErrorState } from 'src/redux/reducer/globalError/actions';
import ErrorBoundary from './ErrorBoundary';
import { showErrorAlert } from './Utils';

export interface BaseScreenInjectedProps {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  setError: (errorData?: any) => void;
  isConnected: boolean;
}

export interface BaseScreenProps<T extends BaseScreenInjectedProps> {
  showError?: boolean;
  showLoader?: boolean;
  showNetworkDisconnected?: boolean;
  render?: (injectedProps: T) => ReactElement | null;
  children?: ReactElement | ReactElement[];
  networkDisconnectedButtonTitle?: string;
}

const BaseScreen = React.memo<BaseScreenProps<BaseScreenInjectedProps>>(
  (baseScreenProps) => {
    const [isLoading, setLoading] = useState(false);
    const [errorData, setErrorData] = useState<Error | undefined>(undefined);
    const  dispatch = useDispatch()
    const globalError: Error | undefined = useSelector(selectErrorState);
    const { resetToScreen } = useAppNavigator()
    const {isConnected} = useNetworkInfoState();

    const { showError, showLoader, render, showNetworkDisconnected =true } =
      baseScreenProps;

      useFocusEffect(
        React.useCallback(() => {
          if (
            isConnected === false &&
            showNetworkDisconnected
          ) {
              Alert.alert('','No Internet connection')
          }
        }, [
          isConnected,
          showNetworkDisconnected,
        ])
      );

      const displayError = (isGloablError) => {
        setLoading(false)

        if(isGloablError){
          if (globalError?.authHeader !=undefined && globalError?.status === 401) {
            setTimeout(() => {
              resetToScreen("auth", { displayAzureLogin: true })
            }, 100)
          } else
            showErrorAlert(globalError?.message ?? 'Something went wrong');
          dispatch(onClearError())
        }
        else{
          showErrorAlert(errorData?.message ?? 'Something went wrong');
          setErrorData(undefined);
        }
       
      };

      useFocusEffect(
        useCallback(() => {
          if (globalError) {
            displayError(true)
          }
        }, [globalError])
      )


    return (
      <View style={[styles.baseScreen]}>
        <ErrorBoundary show={false}>
          {render?.({
            isLoading: isLoading,
            setLoading: setLoading,
            setError: setErrorData,
          })}
          {/* {showLoader && isLoading ? (
            <LoadingIndicator style={styles.loadingIndicator} />
          ) : null} */}
          {/* <AnimatedLoader loading={showLoader && isLoading} /> */}
          {showError && errorData ? displayError(false) : null}
        </ErrorBoundary>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  baseScreen: {
    flex: 1,
    backgroundColor: R.colors.primary.white,
    height: '100%',
    width: '100%',
  },
  loadingIndicator: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    elevation: 10,
  },
});

export default BaseScreen;
