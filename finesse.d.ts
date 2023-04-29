/**
 * Cisco Finesse Type Definitions Library
 * Version 12.6.1
 * @author Tamas Csizmadia
 * 
 **/
  export interface RequestErrorMsg {
    errorType: string,
    errorMessage: string
  }
  
  export interface RequestSuccessRsp {
    status: number,
    rc: number,
    content: string,
    object: object,
    digits?: string,
    error: RequestErrorMsg
  }
  
  enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
  }

  export enum NotificationConnectionState {
    CONNECTED = 'Connected',
    RECOVERED = 'Recovered',
    FAILING = 'Failing',
  }

  export interface RequestOptions {
    method: keyof typeof HttpMethods,
    contentType?: string,
    authorization?: string,
    content?: string
  }
  export interface RequestSuccess {
    (rsp: RequestSuccessRsp): void;
  }
  
  export interface RequestErrorRsp {
    status: number,
    rc: number,
    content: string,
    object: object,
    error: RequestErrorMsg
  }
  export interface RequestError {
    (rsp: RequestErrorRsp): void;
  }
  
  export interface RequestHandlers {
    success?: RequestSuccess,
    error?: RequestError,
  }

  export interface DialogsRequestHandlers {
    onLoad?: (dialog: Dialog) => void,
    onCollectionAdd?: (dialog: Dialog) => void,
    onCollectionDelete?: (dialog: Dialog) => void,
  }
  
  export interface NotReadyReasonCodesRequestSuccess {
    (rsp: ReasonCode[]): void;
  }
  
  export interface NotReadyReasonCodesRequestHandlers {
    success: NotReadyReasonCodesRequestSuccess,
    error: RequestError,
  }
  
  export interface MediaProperties {
    dialedNumber: string,
    callType: keyof typeof CallTypes,
    DNIS: string,
    wrapUpReason: string,
    queueNumber: string,
    queueName: string,
    callKeyCallId: string,
    callKeyPrefix: string,
    callVariable1: string,
    callVariable2: string,
    callVariable3: string,
    callVariable4: string,
    callVariable5: string,
    callVariable6: string,
    callVariable7: string,
    callVariable8: string,
    callVariable9: string,
    callVariable10: string,
    BACampaign: string,
    BAAccountNumber: string,
    BAResponse: string,
    BAStatus: string,
    BADialedListID: string,
    BATimeZone: string,
    BABuddyName: string,
  }
  
  export interface CallbackScope {
    fnc: Callback,
    scope?: any,
  }
  
  export interface ICallVariable {
    name: string,
    value: string
  }
  
  /**
   * NOT_READY reason code
   */
  export interface ReasonCode {
    id: string,
    label: string,
  }

  interface GadgetDetails {
    gadgetId: string,
    tabId: string,
    maxAvailableHeight: number,
    view: 'default' | 'canvas',
  }
  
  export interface ParticipantStates {
    ALERTING: "ALERTING",
    INITIATING: "INITIATING",
    ACTIVE: "ACTIVE",
    DROPPED: "DROPPED",
    HELD: "HELD",
    INITIATED: "INITIATED",
    FAILED: "FAILED",
    WRAP_UP: "WRAP_UP",
    ACCEPTED: "ACCEPTED",
  }
  
  export enum ReasonStates {
    BUSY = "BUSY",
    BAD_DESTINATION = "BAD_DESTINATION",
    OTHER = "OTHER",
    DEVICE_RESOURCE_NOT_AVAILABLE = "DEVICE_RESOURCE_NOT_AVAILABLE",
  }
  
  export enum DialogStates {
    ALERTING = "ALERTING",
    INITIATING = "INITIATING",
    ACTIVE = "ACTIVE",
    DROPPED = "DROPPED",
    INITIATED = "INITIATED",
    FAILED = "FAILED",
    ACCEPTED = "ACCEPTED",
  }
  
  export enum DialogActions {
    DROP = "DROP",
    ANSWER = "ANSWER",
    HOLD = "HOLD",
    BARGE_CALL = "BARGE_CALL",
    PARTICIPANT_DROP = "PARTICIPANT_DROP",
    MAKE_CALL = "MAKE_CALL",
    RETRIEVE = "RETRIEVE",
    UPDATE_SCHEDULED_CALLBACK = "UPDATE_SCHEDULED_CALLBACK",
    CANCEL_SCHEDULED_CALLBACK = "CANCEL_SCHEDULED_CALLBACK",
    CONSULT_CALL = "CONSULT_CALL",
    TRANSFER = "TRANSFER",
    TRANSFER_SST = "TRANSFER_SST",
    CONFERENCE = "CONFERENCE",
    RECLASSIFY = "RECLASSIFY",
    UPDATE_CALL_DATA = "UPDATE_CALL_DATA",
    START_RECORDING = "START_RECORDING",
    SEND_DTMF = "SEND_DTMF",
    ACCEPT = "ACCEPT",
    REJECT = "REJECT",
    CLOSE= "CLOSE",
  }
  
  export enum MediaDialogStates {
    OFFERED = "OFFERED",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    WRAPPING_UP = "WRAPPING_UP",
    INTERRUPTED = "INTERRUPTED",
    CLOSED = "CLOSED",
    ACCEPTED = "ACCEPTED",
    UNKNOWN = "UNKNOWN",
  }
  
  export enum MediaDialogActions {
    ACCEPT = "ACCEPT",
    START = "START",
    PAUSE = "PAUSE",
    RESUME = "RESUME",
    WRAP_UP = "WRAP_UP",
    TRANSFER = "TRANSFER",
    CLOSE = "CLOSE",
  }
  
  export interface Action {
    ACCEPT: string,
    CLOSE: string,
  }
  
  export interface DialogLogoutAction {
    CLOSE: string,
    TRANSFER: string,
  }
  
  export enum UserStates {
    READY = "READY",
    NOT_READY = "NOT_READY",
    LOGOUT = "LOGOUT",
    WORK = "WORK",
    WORK_READY = "WORK_READY",
    TALKING = "TALKING",
    RESERVED = "RESERVED",
    RESERVED_OUTBOUND_PREVIEW = "RESERVED_OUTBOUND_PREVIEW",
    HOLD = "HOLD",
  }
  
  export enum CallTypes {
    ACD_IN = "ACD_IN",
    PREROUTE_ACD_IN = "PREROUTE_ACD_IN",
    PREROUTE_DIRECT_AGENT = "PREROUTE_DIRECT_AGENT",
    TRANSFER = "TRANSFER",
    OTHER_IN = "OTHER_IN",
    OUT = "OUT",
    AGENT_INSIDE = "AGENT_INSIDE",
    CONSULT = "CONSULT",
    CONSULT_OFFERED = "CONSULT_OFFERED",
    CONFERENCE = "CONFERENCE",
    SUPERVISOR_MONITOR = "SUPERVISOR_MONITOR",
    OUTBOUND = "OUTBOUND",
    OUTBOUND_PREVIEW = "OUTBOUND_PREVIEW",
  }
  
  export interface GadgetConfig {
    authorization: string,
    authToken?: string,
    clientDriftInMillis: number,
    compatibilityMode?: true,
    country: string,
    extension: string,
    host: string,
    hostPort: string,
    id?: string,
    language: string,
    locale: string,
    localhostFQDN: string,
    localhostPort: string,
    mobileAgentDialNumber: string,
    mobileAgentMode: string,
    peripheralId?: string,
    pubsubDomain: string,
    restHost: string,
    scheme: "http" | "https",
    systemAuthMode?: string,
    teamId?: string,
    teamName?: string,
    toasterNotificationTimeout?: string,
    xmppDomain: string
  }
  
  export interface Utilities {
    b64Encode: (input: string) => string;
    b64Decode: (input: string) => string;
    buildTimeString: (timeInMs: number) => string;
    buildTimeStringWithOptionalHours: (timeInMs: number) => string;
    buildElapsedTimeString: (adjustedServerTimeInMs: number, stateStartTimeInMs: number) => string;
    buildElapsedTimeStringWithOptionalHours: (adjustedServerTimeInMs: number, stateStartTimeInMs: number) => string;
    buildTotalTimeString: (adjustedServerTimeInMs: number, callStartTimeInMs: number) => string;
    buildHoldTimeString: (adjustedServerTimeInMs: number, holdStartTimeInMs: number) => string;
    buildWrapupTimeString: (adjustedServerTimeInMs: number, wrapupStartTimeInMs: number) => string;
    convertDateToISODateString: (aDate: Date) => string;
    convertNullToEmptyString: (str?: string) => string;
    convertToServerTimeMillis: (clientTime: number) => number;
    convertTsToDuration: (timestamp: string, now?: Date | undefined) => string;
    convertTsToDurationWithFormat: (timestamp: string, forFormat: boolean, now?: Date | undefined) => string;
    currentServerTimeMillis: () => string;
    currentTimeMillis: () => string;
    dateToISOString: (aDate: Date) => string;
    encodeNodeName: (node: any) => any;
    escapeSpaces: (string: string) => string;
    extractTime: (timeStr: string) => number;
    generateUUID: () => string;
    extractHostname: (url: string)  => string;
    getAuthHeaderString: (configObj: GadgetConfig) => string;
    getAuthModes: () => "SSO" | "NON_SSO" | "HYBRID";
    getAuthTokenObj: () => any;
    getCurrentDrift: () => number;
    getDisplayTime: (time: number) => string;
    getEquals: (objA: any, objB: any) => boolean;
    getParameterByName: (str: string, name: string) => string;
    getQueryString: (field: string, url?: string) => string;
    getToken: () => string;
    getUserAuthString: () => string;
    isArray: (obj: any) => boolean;
    padWithWidth: (num: number, padWidth: number) => string;
    parseDateStringISO8601: (s: string) => Date;
    removeSpaces: (string: string) => string;
    trim: (str: string) => string;
    validateHandler: (handler: (any)) => (RequestSuccess | RequestError),
    whenAllDone: (...args: any[]) => any;
  }
  
  export interface ClientLog {
    sendLogs: (contentBody: Object, handlers?: RequestHandlers) => void
  }
  
  export interface ClientLogger {
    log: (message: string, error?: object) => void,
    init: (hub: {}, gadgetId: string, config?: GadgetConfig) => void
  }
  
  export interface Callback {
    (obj?: any): void;
  }

  export interface LoadHandler {
    onLoad?: (obj: RestBase) => void,
    onError?: (obj: RestBase) => void,
  }
  
  export interface UserOptions extends LoadHandler {
    id?: string,
    onChange?: (obj: RestBase) => void,
    onAdd?: (obj: RestBase) => void,
    onDelete?: (obj: RestBase) => void,
  }
  
  export interface RestBaseCallback extends LoadHandler{
    onChange?: (obj: RestBase) => void,
    onAdd?: (obj: RestBase) => void,
    onDelete?: (obj: RestBase) => void,
  }
  
  export interface Notifier {
    addListener: (callback_function: Callback, scope?: Object) => void,
    removeListener: (callback_function: Callback) => void,
  }
  
  export interface RestBase extends Object {
    _data: any,
    getRestUrl: () => string,
    getRestType: () => string,
    getData: () => any,
    getId: () => string,
    hasProperty: (obj: any, property: string) => boolean,
    getProperty: (obj: any, property: string) => any,
    isLoaded: () => RestBase,
    addHandler: (notifierType: string, callback: Callback, scope?: Object) => void,
    removeHandler: (notifierType: string, callback: Callback) => void,
    refresh: (retries: number) => RestBase,
    restRequest: (url: string, options: any) => any,
  }
  
  export interface RestCollectionBase extends RestBase {
    length: number,
    getCollection: () => Object,
    refresh: () => RestCollectionBase,
  }
  
  export interface DialogBase extends RestBase {
    getCallType: () => keyof typeof CallTypes,
    getMediaProperties: () => MediaProperties,
    getMediaType: () => string,
    getParticipants: () => Participant[],
    getParticipantTimerCounters: (participantExt: string) => { startTime: string, stateChangeTime: string, state: string },
    getState: () => keyof typeof DialogStates,
  }
  
  export interface Dialog extends DialogBase {
    readonly prototype: Dialog,
    CallTypes: CallTypes,
    ReasonStates: ReasonStates,
    ParticipantStates: ParticipantStates,
    States: DialogStates,
    Actions: DialogActions,
    dropParticipant: (targetMediaAddress: string, handlers?: RequestHandlers) => void,
    getDialogUri: () => string,
    getDNIS: () => string,
    getDroppableParticipants: (filterExtension: string) => Participant[],
    getFromAddress: () => string,
    getToAddress: () => string,
    initiateDirectTransfer: (mediaAddress: string, toAddress: string, handlers?: RequestHandlers) => Dialog,
    isParticipantDroppable: (participantExt: string) => boolean,
    makeConsultCall: (mediaAddress: string, toAddress: string, handlers?: RequestHandlers) => Dialog,
    requestAction: (mediaAddress: string, action: string, handlers?: RequestHandlers) => Dialog,
    sendDTMFRequest: (extension: string, handlers: RequestHandlers | undefined, digits: string) => Dialog,
    updateWrapUpReason: (wrapUpReason: string, handlers?: RequestHandlers) => Dialog,
    getCallVariable: (varName: string) => string, 
    updateCallVariables: (vars: { name: string, value: string }[], options?: {}) => void, 
    updateCallVariable: (name: string, value: string, options?: {}) => void,
    dropCall: (mediaAddress: string, handlers?: RequestHandlers) => Dialog,
    setSentDTMF: (b: boolean) => void,
    isSentDTMF: () => boolean,
  }
  
  export interface Dialogs extends RestCollectionBase {
    getDialogCount: (excludeSilentMonitor: boolean) => number,
  }
  
  export interface MediaOptions {
    maxDialogLimit: number,
    interruptActiopn: boolean,
    dialogLogoutAction: string
  }
  
  export interface MediaOptionsQuery {
    id: string,
    onLoad: (t: MediaList) => void,
    onChange: (t: MediaList) => void,
    onAdd: (t: MediaList) => void,
    onDelete: (t: MediaList) => void,
    onError: (rsp: RequestErrorRsp) => void,
    mediaOptions: MediaOptions
  }
  
  export interface MediaDialogs extends Dialogs {
    getMedia: () => {}
  }
  
  export interface Media extends RestBase {
    supportsRequests: boolean,
    getDialogLogoutAction: () => string,
    getInterruptAction: () => string,
    getInterruptible: () => boolean,
    getMaxDialogLimit: () => string,
    getMediaDialogs: (handlers?: RequestHandlers) => MediaDialogs,
    getMediaId: () => string,
    getName: () => string,
    getReasonCodeId: () => string,
    getReasonCodeLabel: () => string,
    getState: () => keyof typeof MediaStates,
  }
  
  export interface MediaDialog extends Dialog {
    transfer: (target: string, handlers?: RequestHandlers) => void,
    setTaskState: (state: string, handlers: RequestHandlers | undefined, target: string) => void,
  }
  
  export interface MediaList extends RestCollectionBase {
    getMedia: (options: MediaOptionsQuery) => Media
  }
  
  export interface Participant {
    state: keyof typeof ParticipantStates,
    stateCause: string,
    mediaAddress: string,
    startTime: string,
    stateChangeTime: string,
    actions: {action: string[]},
  }
  
  export interface Queue extends RestBase {
    getName: () => string,
    getStatistics: () => Object,
  }
  
  export interface Queues extends RestCollectionBase {
  }
  
  
  export interface Team extends RestBase {
    getName: () => string,
    getUsers: () => Users,
  }
  
  export interface Teams extends RestCollectionBase {
  }
  
  export interface WrapUpReasons extends RestCollectionBase {
  
  }
  
  export interface PhoneBooks extends RestCollectionBase {
  
  }

  export interface Devices {
    deviceId: string,
    deviceTypeName: string,
    deviceType: string,
  }
  
  export interface User extends RestBase {
    new(options: UserOptions): User,
    States: UserStates,
    /** Retrieves the current active device ID of the agent. */
    getActiveDeviceId: () => string,
    /** Retrieves the list of devices associated with a particular extension. */
    getDevices: () => Devices,
    /** Retrieves the collection of voice dialogs associated with the current user. This includes the dialogs that the user is currently active on, being alerted, along with the held dialogs. The terminated dialogs are not part of the list. */
    getDialogs: (handlers?: DialogsRequestHandlers) => Dialogs,
    /** Retrieves the collection of dialogs (calls) associated with the current user. This includes the dialogs that the user is currently active on, being alerted, along with the held dialogs. The terminated dialogs are not part of the list. The difference between the getDialogsNoCache and getDialogs methods is that the GET REST API request is always made for this method. */
    getDialogsNoCache: (handlers?: DialogsRequestHandlers) => Dialogs,
    /** Retrieves the extension that is associated with the user.  */
    getExtension: () => string,
    /** Retrieves the first name of the user.  */
    getFirstName: () => string,
    /** Retrieves the full name of the user. The full name format is FirstName LastName (for example, John Doe).  */
    getFullName: () => string,
    /** Retrieves the last name of the user.  */
    getLastName: () => string,
    /** Retrieves the media list that is associated with the user. It retrieves the media dialog collection object.  */
    getMediaList: (handlers?: DialogsRequestHandlers) => MediaList,
    getQueues: (handlers?: RestBaseCallback) => Queues,
    getState: () => string,
    getStateChangeTime: () => string,
    getTeamId: () => string,
    getTeamName: () => string,
    getWrapUpOnIncoming: () => string,
    getNotReadyReasonCodes: (handlers?: NotReadyReasonCodesRequestHandlers) => void,
    getSignoutReasonCodes: (handlers?: NotReadyReasonCodesRequestHandlers) => void,
    hasSupervisorRole: () => boolean,
    isMobileAgent: () => boolean,
    setState: (newState: string, reasonCode: ReasonCode | null, handlers?: RequestHandlers) => void,
    makeCall: (number: string, handlers?: RequestHandlers) => User,
    makeSMSCall: (number: string, handlers?: RequestHandlers) => User,
    makeBargeCall: (number: string, dialogUri: string, handlers?: RequestHandlers) => User,
    isPendingStateChange: () => boolean,
    isWrapUp: () => boolean,
    getReasonCodeLabel: () => string,
    getNotReadyReasonCodeId: () => string,
    getReasonCodeById: (handlers: RequestHandlers | undefined, reasonCodeId: string) => void,
    getSupervisedTeams: () => Team[],
    hasAgentRole: () => boolean,
    getWrapUpReasons: () => WrapUpReasons,
    getPhoneBooks: () => PhoneBooks,
  }
  
  export interface Users extends RestCollectionBase {
  
  }
  export interface GadgetsPrefs {
    getString: (s: string) => string,
    getInt: (s: string) => number,
    getBool: (s: string) => number,
    getFloat: (s: string) => number,
    getCountry: (s: string) => string,
    getLang: (s: string) => string,
    getMsg: (s: string) => string,
    getModuleId: (s: string) => string,
  }
  
  export interface Gadgets {
    Hub: {},
    HubSettings: {},
    window: {
      adjustHeight: (h?: number) => void,
    },
    Prefs: { /* https://developers.google.com/gadgets/docs/reference#gadgets.Prefs */
      new(): GadgetsPrefs,
    }
  }
  
  export interface ClientServices {
    init: (config: {}) => ClientServices,
    registerOnConnectHandler: (handler: RequestHandlers) => void,
    registerOnDisconnectHandler: (handler: RequestHandlers) => void,
    getNotificationConnectionState: () => keyof typeof NotificationConnectionState,
    getRestHost: () => string,
  }
  
  export interface Container {
    Config: GadgetConfig
  }

  export enum ContainerServicesTopics {
    ACTIVE_CALL_STATUS_EVENT = "ACTIVE_CALL_STATUS_EVENT",
    ACTIVE_TAB = "ACTIVE_TAB",
    FINESSE_MAINTENANCE_MODE_EVENT = "FINESSE_MAINTENANCE_MODE_EVENT",
    GADGET_VIEW_CHANGED_EVENT = "GADGET_VIEW_CHANGED_EVENT",
    TIMER_TICK_EVENT = "TIMER_TICK_EVENT",
    WORKFLOW_ACTION_EVENT = "WORKFLOW_ACTION_EVENT",
  }
  
  export interface ContainerServices {
    activateMyTab: () => void,
    activateTab: (tabId: string) => void,
    addHandler: (topic: keyof typeof ContainerServicesTopics, callback: Callback) => void,
    collapseMyGadget: () => void,
    enableTitleBar: () => void,
    expandMyGadget: () => void,
    getMyGadgetId: () => string,
    getMyGadgetView: () => GadgetDetails,
    getMyTabId: () => string,
    hideCertificateBanner: (id: string) => void,
    hideDialog: () => void,
    hideMyGadget: () => void,
    hideMyGadgetNotification: () => void,
    init: () => ContainerServices,
    isTabbedGadget: () => boolean,
    makeActiveTabReq: () => void,
    publish: (topic:keyof typeof ContainerServicesTopics, data:any) => void,
    reloadMyGadget: () => void,
    reloadMyGadgetFromUrl: (url: string) => void,
    removeHandler: (topic: keyof typeof ContainerServicesTopics, callback?: Callback) => void,
    setMyGadgetTitle: (title: string) => void,
    showCertificateBanner: (callback: Callback) => void,
    showDialog: (title: string, options: {close: Callback, message: string, isBlocking: boolean}) => object,
    showMyGadget: () => void,
    showMyGadgetNotification: () => void,
    tabVisible: () => boolean
  }

  enum TOASTER_DEFAULT_ICONS {
    INCOMING_CALL_ICON,
    INCOMING_CHAT_ICON,
    INCOMING_TEAM_MESSAGE
  }

  export interface FinesseToasterOptions {
    body: string,
    icon: keyof typeof TOASTER_DEFAULT_ICONS | string,
    autoClose: number,
    showWhenVisible: boolean
  }

  export interface FinesseToaster {
    showToaster: (title: string, options: FinesseToasterOptions) => Notification | undefined;
    init: (config: GadgetConfig, logger?: ClientLogger) => any;
  }

  interface Button {
    id: string,
    label: string,
    type: "Affirm" | "Decline",
    hoverText?: string,
    confirmButtons?: [ConfirmButton] | [ConfirmButton, ConfirmButton]
  }

  interface ConfirmButton {
    id: string,
    label: string,
    hoverText?: string,
  }

  export interface ActionData {
    dismissible: boolean,
    keepMaximised: boolean,
    clientIdentifier: string,
    requiredActionText?: string,
    buttons?: [Button] | [Button, Button]
  }

  export interface BannerData {
    icon: {
      type: string,
      value: string
    },
    content?: ICallVariable[],
    headerContent: {
      maxHeaderTitle: string,
      minHeaderTitle: string
    }
  }

  export interface TimerData {
    displayTimeoutInSecs: number,
    display: boolean,
    counterType: 'COUNT_UP' | 'COUNT_DOWN'
  }

  export interface PopoverService {
    dismissPopover: (id: string) => void,
    generatePayload: (isExistingPopover: boolean, popoverId: string, bannerData: BannerData, timerData: TimerData, actionData: ActionData) => void,
    init: (ContainerService: Function) => PopoverService,
    showPopover: (bannerData: BannerData, timerData: TimerData, actionData: ActionData, actionHandler: (popoverId: string, source: string) => void) => string,
    updatePopover: (popoverId: string, bannerData: BannerData, timerData: TimerData, actionData: ActionData, actionHandler: Function) => string,
  }

  export interface PopoverScheme {
    getActionDataSchema: () => ActionData,
    getBannerDataSchema: () => BannerData,
    getTimerDataSchema: () => TimerData
  }

  export interface TaskActivityNotification {
    init: (c: ContainerServices) => TaskActivityNotification,
    notifyTaskSelection: (from: string, message: {
      timestamp?: number,
      taskId: string,
      active: boolean,
      mediaType: string,
      contextInfo?: object
     }) => void,
     registerForTaskNotifications: (callback: Callback) => void,
     requestCurrentTasks: () => void
  }
  
  export interface DesktopCache {
    clearData: (callback?: Callback) => void,
    deleteData: (key:string, callback?: Callback) => void,
    fetchData: (key:string, callback?: Callback) => void,
    saveOrUpdateData: (records: {key: string, data: string}[], callback?: Callback) => void,
    setGroup: (groupName: string) => void,
  }

  export interface Finesse {
    clientservices: {
      ClientServices: ClientServices
    },
    container: Container,
    containerservices: {
      FinesseToaster: FinesseToaster;
      PopoverService: PopoverService;
      PopoverScheme: PopoverScheme;
      TaskActivityNotification: TaskActivityNotification;
      ContainerServices: ContainerServices;
    },
    cslogger: {
      ClientLogger: ClientLogger,
    }
    modules: Modules,
    gadget: {
      Config: GadgetConfig
    },
    restservices: {
      User: User,
      Dialog: Dialog,
    },
    utilities: {
      Utilities: Utilities,
      DesktopCache: DesktopCache
    }
  }
  