export default {
  APP_VERSION: "App Version",
  TABS: {
    Home: "Home",
    Payment: "Payment",
    Plans: "Plans",
    Setting: "Setting",
    Wallet: "Wallet"
  },

  ScreenNameConstant: {
    CurrentLease: "CurrentLease"
  },

  onBoarding: {
    getStarted: "Get Started"
  },
  login: {
    SIGNIN: "SIGN IN",
    password: "Password",
    forgot_password: "FORGOT PASSWORD",
    or: "or",
    create_acc: "CREATE ACCOUNT"
  },
  forgotpassword: {
    verifyEmail: "VERIFY EMAIL",
    verifyCode: "VERIFY CODE",
    verfication_code_msg:
      "Verification code has been sent,\n please type in the code.",
    newPassword: "New Password",
    newConfirmPassword: "New Confirm Password"
  },
  signup: {
    email: "Email",
    create_password: "Create Password",
    confirm_password: "Confirm Password",
    continue: "CONTINUE"
  },
  contactInformation: {
    contact_information_title: "Contact Information",
    firstName: "First Name",
    lastName: "Last Name",
    mobile_phe_no: "Mobile Phone Number",
    secondary_phe_no: "Secondary Phone Number (Optional)",
    Ihaveread: "I have read and agree to the",
    termCondition: "Terms and Conditions.",
    dob: "Date of Birth"
  },
  addBankAccount: {
    bankInformation: "Bank Information",
    accountNickname: "Account Nickname (Optional)",
    accountHolderName: "Account Holder Name",
    digitRoutingNumber: "9-Digit Routing Number",
    accountNumber: "Account Number",
    confirmAccountNumber: "Confirm Account",
    whatTypeOfAcc: "What type of account is this?",
    checking: "Checking",
    savings: "Savings",
    howIsThisAccount: "How is this account classified?",
    business: "Business",
    personal: "Personal",
    iAmAuthoriedToMake:
      "I am authorized to make electronic transactions from this account.",
    iAuthorizeCirca:
      "I authorize Circa to debit funds from this account according to the ",
    directDebit: "direct debit authorization.",
    cardAuthorize:
      "I authorize Circa to charge this card per my payment schedule."
  },

  staticPageHeader: {
    termOfUse: "Terms of Use"
  },
  selectPlan: {
    selectYourPlan: "Select Your Plan",
    youPay: "You pay",
    onThe: "on the ",
    plan: "Plan",
    schedule: "Schedule",
    dates: "Dates",
    date: "Date",
    previewCalendar: "PREVIEW CALENDAR",
    day: "Day",
    startDate: "Start Date"
  },
  selectMethod: {
    selectPaymentMethod: "Select Payment Method",
    bankAccount: "Bank Account",
    debitCreditCard: "Debit/Credit Card",
    cashApp: "Cash App",
    cashText: "Cash",
    cash: "In-Person Cash",
    helpMeUnderstand: "HELP ME UNDERSTAND THESE OPTIONS"
  },
  paymentSettingOption: {
    neverMiss: "Never miss a payment",
    haveYourPaymentAuto:
      "Have your payments automatically processed. We will always sends notifications beforehand.",
    turnOn:
      "Turn on notifications to make sure you never miss a payment. You can adjust these settings at any time.",
    alwaysStayUp: "Always stay up to date",
    turnOnAutopay: "turn on autopay",
    turnOnNotification: "turn on notifications",
    payManually: "pay manually",
    maybeLater: "maybe later"
  },
  paymentSettingModal: {
    paymentSettings: "Payment Settings",
    autopay: "Autopay",
    autoPayMsg:
      "With autopay, Circa will withdraw your scheduled payments automatically from your account. Circa always sends a reminder according to your notification preferences before withdrawing any funds, giving you the opportunity to make last minute changes when possible.",
    manual: "Manual",
    manualToPaymsg:
      "To pay manually, sign in and navigate to your Circa Wallet each time you need to make a payment. You will still receive payment reminders according to your notification preferences. ",
    bankAccount: "Bank Account",
    bankAccountMsg:
      "Add you bank information to pay rent directly from your account. This is one of the quickset, safest, and cheapest ways to pay.",
    bankAccountRemainMsg:
      "You can choose to have your payments withdrawn automatically according to your payment schedule or you can sign in each time you need to make a payment.",
    cash: "Cash",
    cashMsg:
      "Visit an agent at a nearby retailer to pay using cash. We'll help you find an agent near you"
  },
  VALIDATIONS: {
    INVALID_EMAIL: "Please enter a valid email address",
    enter_email: "Please enter the Email",
    enter_password: "Please enter the Password",
    valid_password:
      "Password should be between 8 and 16 characters and include at least one lower case letter (abc), upper case letter (ABC), number (0-9), and special character (!@#$%)",
    confirm_password_validation: "Passwords don't match",
    del_validation: "Type text don't match with DELETE",
    enter_confrim_password: "This field is required.",
    enter_type_password: "Please type DELETE",
    enter_name: "Please enter the Name",
    enter_first_name: "Please enter your first name.",

    enter_card_nick_name: "Please enter the Card Nickname",
    enter_last_name: "Please enter your last name.",
    enter_no: "Please enter a 10-digit U.S. phone number.",
    valid_name: "First name must be at least 2 characters.",
    valid_name_last: "Last name must be at least 2 characters.",
    valid_card_name: "Please enter at least 3 char long",
    INVALID_NAME: "Please enter the valid Name",
    INVALID_FIRSTNAME: "Please enter the valid First Name",
    INVALID_CARD_NICKNAME: "Please enter the valid Card Nickname",
    INVALID_LASTNAME: "Please enter the valid Last Name",

    //valid_acc_nickname: 'Please enter Account Nickname',
    enter_acc_nickname: "Please enter Account Nickname",
    INVALID_ACCNICKNAME: "Please enter the valid Account Nickname",
    valid_nickname: "Please enter atleast 3 char long",
    enter_acc_holder_name: "Please enter Account Holder Name",
    valid_acc_holder: "Account holder name should be at least 10 characters.",
    INVALID_ACCHOLDER: "Please enter the valid Account Holder Name",
    enter_acc_number: "Account number is required.",
    valid_number: "Please enter a 10-digit U.S. phone number.",
    INVALID_ACCOUNT_NUMBER: "Please enter the valid Account Number",
    enter_nineDigit: "Please enter a 9-digit number",
    valid_nineDigit: "Please enter 9 digits number",
    INVALID_NINE_DIGIT_NUMBER: "Please enter the valid 9-Digit Routing Number",
    confirm_account_no_validation: "Account numbers must match.",
    enter_confirm_account: "Please enter the Confirm Account Number",
    enter_dob: "Please enter the Date of Birth"
  },
  //
  //laurenjohnson@gmail.com
  EmailVerfication: {
    You_Got: "You've got mail!",
    Email_Confirm_Address: "Please enter the verification code \nwe sent to ",
    Email_Id: "laurenjohnson@gmail.com",
    Send_New_Code: "SEND NEW CODE",
    Open_Email_App: "OPEN EMAIL APP",
    Email_Verfication: "Email Verfication",
    Email_Verfication_Text:
      "If you don't see a message in your inbox, make sure the email address you provided is correct. Also check your spam or junk mail folder. This email was sent from admin@wearecirca.com.",
    Email_Verfication_remain:
      '"If you want us to resend the email, tap Send new code."',
    EmailVerification_Further: "For further questions, please",
    Email_contact_us: " contact us.",
    locationYourAcc: "Locating Your Account Info",
    findYourAccount:
      "Find your account number and 9-digit routing number at the bottom of your check or by visiting your online banking portal."
  },
  welcomeModel: {
    welcomeBack: "Welcome back!",
    youAreAlmost:
      "You’re almost done setting up your account! We saved your progress, so you can pick up where you left off."
  },
  LeaseID: {
    referralCode: "Referral code successfully added.",
    enterLeaseID: "Enter Lease ID",
    enterZipCode: "Enter Zip Code",
    addReferralCode: "ADD REFERRAL CODE",
    next: "NEXT",
    leaseID: "Lease ID",
    participatingCommunities: "Participating Communities",
    messageStart:
      "If your community uses Circa, you should have received a letter with your Lease ID.",
    leaseinfoMsg:
      "If you did not receive a letter, cannot find your Lease ID, or are unsure whether your community uses Circa, email us anytime at ",
    supportMailid: "support@wearecirca.com ",
    callus: "or call us during business hours at ",
    leaseContactNo: "1-844-274-7747.",
    individualResidents: "Individual Residents",
    dontLiveIndividualResidentsInfoMsg:
      "Don’t live in a community currently using Circa? Recommend Circa to your property. If they sign up, we’ll cover your rent for a month! \n",
    tapHeretoLearn: "Tap here to learn more.",
    getWithReferral: "Get $10 with Referral Code!",
    enterYourReferral: "Enter your referral code below to get $",
    remainReferral: " off your first rent payment.",
    applyCode: "APPLY CODE",
    reportAnError: "Report an Error",
    errorIfAnyofThese:
      "If any of these lease details are incorrect, please contact us before continuing your account setup.",
    emailUsAnytime: "Email us anytime at "
  },
  leaseDetail: {
    leaseDetails: "Lease Details",
    address: "Address",
    leaseInformation: "Lease Information",
    confirmInformation: "Confirm Information",
    reportAnError: "Report an error",
    community: "Community",
    unit: "Unit",
    city: "City",
    state: "State",
    zipCode: "Zip Code",
    monthlyRent: "Monthly Rent",
    startDate: "Start Date",
    endDate: "End Date",
    leaseID: "Lease ID"
  },
  payment: {
    paymentCalendar: "Payment Calendar",
    paymentCalendarInfo:
      "Dates with a dot below indicate a scheduled payment day.",
    paymentTooltipMsg:
      "Payments that fall on weekends or bank holidays will process the next business day."
  },

  landing: {
    welcomeBack: "Welcome Back,",
    youHaveNo: "You have no active leases.",
    viewPastLease: "View Past Leases",
    linkNewLease: "Link New Lease",
    modify: "modify",
    seeAll: "See all",
    widgets: "widgets",
    finish: "finish",
    almostDoneFinish: "Almost done! Finish your lease  ",
    almostDoneFinishRemainText: "setup to start paying rent.",
    leaseActivity: "Lease activity is",
    paused: "Paused",
    contactCirca: "Contact Circa",
    actionRequired: "Action Required",
    reschedule: "reschedule",
    makePlan: "Make a plan",
    urgentActionRequired: "Urgent Action Required",
    daysToAct: "days to act",
    getHelp: "Get help",
    visitSupportCenter: "VISIT SUPPORT CENTER ",
    supportCenter:"SUPPORT CENTER",
    haveYouMade: "Have you made your \ncash payment?",
    letUsKnow:
      "Let us know once you’ve paid your \nrent using cash at a retailer near you.",
    iPaid: "I paid",
    learnMore: "Learn more"
  },
  settings: {
    settings: "Settings",
    profile: "Profile",
    changePassword: "Change Password",
    paymentsMethods: "Payments Methods",
    leases: "Leases",
    notifications: "Notifications",
    referNeghbor: "Refer a Neighbor",
    help: "Help",
    legal: "Legal",
    signOut: "sign out",
    deleteAccount: "delete account"
  },
  legal: {
    termOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    endUserLicense: "End User License Agreement",
    directDebit: "Direct Debit Authorization"
  },
  paymentDetails: {
    details: "Details",
    paymentDue: "Amount Due",
    paymentAmount: "Payment Amount",
    amountLabel:
      "Your payment will be applied against your account balance at your property.",
    paymentAmountSubject:
      "Payment amounts subject to change. Amounts are confirmed 2 business days before the payment date, according to your rent bill and plan settings.",
    rent: "Rent",
    utilities: "Utilities",
    other: "Other",
    keyReplacement: "key replacement",
    newCharges: "New Charges",
    previousCharges: "Previous Charges",
    arrears: "Arrears",
    forDetails:
      "For more details about your previous charges, please refer to your rent bill or contact your property.",
    yourPayment:
      "Your payment will be applied against your account balance at your property.",
    walletActivity: "Wallet Activity",
    rentAssist: "RentAssist",
    otherCharges: "Other Charges",
    payFee: "Pay Fee"
  },
  cashPayment: {
    cashPayment: "Cash Payments",
    payYourRent:
      "Pay your rent with cash by visiting an agent retailer near you.",
    step1: "Step 1: Find an Agent",
    tapBelow:
      'Tap below to find a list of agents near you. Enter your zip code and filter results by “Bill Payment” or “Pay a Bill"',
    findMoneyGram: "find moneygram agent",
    findFidelity: "find fidelity express agent",
    findFidelityTitle: "Fidelity Express",
    findMoneyGramTitle: "MoneyGram",
    findFidelity: "find fidelity express agent",
    setp2: "Step 2: Pay In-Person",
    tellThe: "Tell the agent you are paying a Circa bill.",
    afterOneTimne:
      "After a one-time account setup, you will provide your phone number and pay with cash. A small processing fee will apply.",
    visitOur: "Visit our ",
    supportCenter: "Support Center",
    forMoreDetails:
      " for more details, as the specific process may vary by location."
  },
  upcoming: {
    type: "Type",
    method: "Method",
    payment: "Payment"
  },
  edit: "Edit",
  cancel: "Cancel",
  add: "Add",

  plan: {
    plan: "Plan",
    monthlyPlan: "Monthly Plan",
    exceptions: "Exceptions",
    noScheduledExceptions: "No scheduled exceptions"
  },
  lease: {
    current: "Current",
    inComplete: "Incomplete",
    previous: "Previous"
  },
  paymentTab: {
    currentLease: "Current",
    previousLease: "Previous"
  },
  scheduleException: {
    selectMonth: "Select a month...",
    scheduleExceptionTitle: "Schedule an Exception",
    month: "Month",
    date: "Date",
    method: "Method",
    settings: "Settings",
    save: "SAVE",
    delete: "DELETE",
    confirmChanges: "CONFIRM CHANGES"
  },
  rentAssistSetting: {
    youPayExtra: "You pay an extra",
    eachMonth: "each month for",
    description:
      "Amounts subject to change. Review your upcoming payment details for the most up-to-date information.",
    extraAmount: "$100",
    extraMonth: "5",
    extraMonthDollar: "5.5",
    months: " months",
    amount: "Amount"
  },
  appLoaderText: {
    tipText: [
      "Our mission is to build \nstronger communities \nthrough payment innovation.",
      "Did you know that paying directly \nfrom your bank account is one of the \ncheapest, most secure ways to pay?",
      "Over 70% of renters in the U.S. \nneed payment flexibility \nat least once per year.",
      "Circa lets you make changes to your \npayment settings up to 1 business day \nbefore your scheduled payment date.",
      "Circa’s payment flexibility helps you \npay on a schedule that works for you \nwithout incurring late fees.",
      "Circa reduces evictions by making \nit 4x easier for residents to pay rent \non-time."
    ]
  },

  ///rent Assist
  rentAssist: {
    yourAccountBal: "Your account balance is",
    welcomeRentAssist: "Welcome to RentAssist!",
    scheduleTheRest:"Schedule the Rest",
    makePaymentToday:
      "Make a payment today or set up a long term plan to pay back missed rent.",
    makePayment: "Make a Payment",
    setUpRentAssist: "Setup RentAssist",
    modifyRentAssist:"Modify RentAssist"
  },
  rentAssistPaymentModel: {
    paymentPlanOption: "Payment Plan Options",
    percentage: "Percentage (%)",
    percentageOfYour:
      "A percentage of your total balance will be added to your regular rent payment(s) each month, until your balance is paid off.",
    fixedAmount: "Fixed Amount ($)",
    AFixedDollar:
      "A fixed dollar amount will be added to your regular rent payment(s) each month, until your balance is paid off."
  },
  paymentItem: {
    item: "Item",
    amount: "Amount",
    method: "Method",
    schedulePayment: "Schedule payment",
    viewDetails: "view details",
    other: "Other",
    specify: "Specify"
  },
  modify: {
    dueIn: "due in",
    days: " days",
    needToModify: "Need to modify this payment?",
    yourProperty:
      "Your property and Circa have teamed up to offer you the below options.",
    payNow: "Pay Now",
    changePlan: "Change Plan",
    payOtherAmount: "Pay Other Amount",
    payLate: "Pay Late",
    updateMethod: "Update Method",
    learnMore: "Learn more"
  },
  changePlan: {
    changePlan: "Change Plan",
    youAreModify: "You are modifying $1000 on December 2"
  },
  payLater: {
    payLate: "Pay Late",
    youAreModify:
      "You are modifying ",
      latePayment:" Late payments cannot be changed.",
    reason: "Reason",
    messageToProperty: "Message to Property (Optional)",
    sendAPersonalNote: "Send a personal note to your property",
    schedulePayment: "Schedule payment",
    selectReason: "Select reason",
    selectDate: "Select date"
  },

  paymentAmount: {
    enterAmount: "Enter Amount",
    paymentMustBe: "Payment must be at least $",
    confirmAmount: "confirm amount"
  },
  paymentOtherAmount: {
    payOtherAmount: "Pay Other Amount",
    youAreModify: "You are modifying $1000 on December 2",
    amount: "Amount",
    selectAmount: "Select amount"
  },
  dateSelectionModal: {
    dateSelection: "Date Selection",
    selectDate: "SELECT DATE"
  },
  wallet: {
    makeAPayment: "MAKE A PAYMENT",
    youDoHave: "You don’t have any missed rent.",
    ALate: "A $10 late fee will be added to this payment."
  },
  notificationReminder: {
    turnOn: "TURN ON",
    pushNotificationAre: "Push notifications are turned off.",
    turnOnToGet:
      "Turn on to get important updates about your payment and account activity.",
    setPref: "SET PREFERENCES",
    referNeighbor: "Refer a neighbor",
    viewSTATS: "VIEW STATS"
  },
  staticInfo: {
    payRent: "Pay rent, build credit",
    circaReports:
      "Circa reports on-time payments, so you \ncan build credit history by paying rent.",
    everyOnTime:
      "Every on-time payment according to your schedule is a chance to boost your credit — even when you’re using a flexible rent plan!",
    goodCredit:
      "Good credit scores are for more than just getting a credit card or a loan.They can help support job applications, lower interest rates, and unlock resources in an emergency.",
    inPartnership: "in partnership with"
  },
  staticInfoCard: {
    usingCardsWisely: "Using cards wisely",
    knowThePros:
      "Know the pros, cons, and alternatives to \npaying rent with a credit or debit card. ",
    ifYouCan:
      "If you can pay your credit card bill on-time and in-full, it may be a good way to earn points and benefits offered by your card.",
    howeverLarge:
      "However, large credit balances usually incur 20-30% APRs and can negatively impact your credit score. Consider Circa’s flexible payment plans as a cheaper alternative.",
    payingWithDebit:
      "Paying with debit? Consider paying directly from your bank account to avoid the 3% processing fee that cards incur."
  },
  paymentMethod: {
    paymentMethod: "Payment Method",
    bankAccounts: "Bank Accounts",
    addAccount: "Add Account",
    addCard: "Add Card",
    card: "Cards",
    cashApp: "Cash App",
    other: "Other"
  },
  paymentMethodModal: {
    noAdditionalFees: "No additional fees",
    addYourBank:
      "Add your bank information to pay rent directly from your account. This is one of the quickest, safest, and cheapest ways to pay. ",
    debitCreditCard: "Debit/Credit Card",
    processing: "+ 3% processing fee",
    payUsingYour:
      "Pay using your debit or credit card. Transactions are powered by Stripe. Circa accepts Visa, Mastercard, and Discover. ",
    tapHere: "Tap here to learn more.",
    cashApp: "Cash App",
    processingFee: "+ 2.75% processing fee.",
    useCashApp: "Use Cash App to pay to $wearecirca.",
    cash: "Cash",
    agentFee: "+ agent fee",
    visitAn:
      "Visit an agent at a nearby retailer to pay using cash. We’ll help you find an agent near you.",
    doNotForget: "Don’t Forget!",
    youCan:
      "You can always change your payment method up to 1 business day before your scheduled payment. You can even change mid-month if you have multiple payments scheduled."
  },

  cardDetails: {
    cardDetails: "Card Details",
    cardNickname: "Card Nickname",
    cardNumber: "Card Number",
    expiryDate: "Expiry Date",
    remove: "Remove"
  },

  replacePayment: {
    replacePaymentMethod: "Replace Payment Method",
    thereAreSchedule:
      "There are scheduled payments using this payment method. Replace with another before removing this method from your account.",
    useExistingMethod: "Use existing method",
    addNewMethod: "Add new method",
    addBankAccount: "Add Bank Account",
    addCard: "Add Card"
  },
  cardInform: {
    cardInformation: "Card Information",
    cardDetails: "Card Details"
  },
  cardInfoModal: {
    cardSecurity: "Card Security",
    yourCardInfoIsPassed:
      "Your card information is passed directly to Stripe, a market leader in debit and credit card transactions. Circa never sees or has access to your card information.",
    toGiveYouThe:
      "To give you the highest degree of privacy and security, Stripe securely stores your card information and facilitates all card transactions on behalf of Circa."
  },
  cardInfoContact: {
    wereHereToHelp: "We’re here to help",
    visitSupportCenter: "Visit support center",
    getHelp: "Get help",
    emailUS: "Email US",
    callUs: "Call us"
  },
  referNeighbor: {
    shareCircaEarn: "Share Circa & Earn",
    inviteYourNeighbor:
      "Invite your neighbors and get $10 towards \nrent when they make their first payment.",
    yourReferralCode: "Your referral code is:",
    shareYourCode: "Share your code "
  },
  notificationSettings: {
    notifications: "Notifications",
    accountEssentials: "Account Essentials",
    theseMessageAreReq:
      "These messages are required because we can’t properly service your account without them.",
    push: "Push",
    sms: "SMS",
    email: "Email",
    accountUpdates: "Account Updates",
    theseUpdateNotify:
      "These updates notify you of any changes made to your account, including plan settings.",
    payment: "Payment",
    theseReminder:
      "These reminders help you stay on top of your payment schedule.",
    circa: "Circa",
    theseCommunication:
      "These communications keep you in the know about what’s new at Circa."
  },
  firstVisitModel: {
    doNotForget: "Don’t Forget!",
    circaWill: "Circa will process your rent starting ",
    makeSure:
      ". Make sure you take care of any payments before then.If you’d like us to start processing payments sooner, please send us an email at ",

    ifCurrently:
      "If you currently use another service to pay  rent, make sure you cancel it before September to avoid paying twice!"
  },
  accountDelete: {
    deleteAccount:
      "This action deletes your account and erases your entire digital footprint from our system. You will lose your username, payment history, and access to current and future features.",
    thisAction: "This action is permanent and cannot be undone.",
    typeDELETE: "Type “DELETE”",
    password: "Password",
    deleteEverything: "delete everything"
  },
  notificationScreen: {
    notifications: "Notifications"
  },
  cashApp: {
    cashApp: "Cash App",
    step1Download: "Step 1: Download Cash App",
    downloadCashApp:
      "Download Cash App on the iOS App Store or Google Play Store.",
    step2Pay: "Step 2: Pay with Cash App",
    scanTheQRcodeBelow:
      "Scan the QR code below using your mobile device or search $wearecirca.",
    aProcessing: "A 2.75% processing fee will apply.",
    accessThisInfo: "Access this info anytime in \nSettings > Payment Methods.",
    continueWith: "continue with cash app",
    continueWithCash: "continue with cash"
  },

  referNeighbor: {
    shareCircaEarn: "Share Circa & Earn",
    inviteYourNeighbor:
      "Invite your neighbors and get $10 towards \nrent when they make their first payment.",
    yourReferralCode: "Your referral code is:",
    shareYourCode: "Share your code "
  },
  notificationHeader:{
    older:"Older",
    lastMonth:"Last Month",
    new:"New" },
    continue: "CONTINUE",
    lateFeeMsg:" late fee will be added to this payment.",
  details: "Details",
  viewDetails: "View Details",
  are_you_sure: "Are you sure?",
  confirm: "Confirm",
  deleteException:"delete exception",
  remove: "Remove",
  save: "SAVE",
  theseChanges: "These changes will apply to all regularly scheduled payments. ",
  confirmScheduleText:"Switching from a flexible plan to 1 Pay will change your payment amount.",
  confirmScheduleTextRemain:"We will automatically remove the flexible plan fees from your payment amount."
}
