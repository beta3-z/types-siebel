declare function theApplication(): ApplicationShadow
declare function IsOpenUI(): boolean
declare function IsOfflineModeEnabled(): boolean
declare function SWEGotoView(viewName: string): void
declare function doNothing(): void
declare function Namespace(name: string): void
declare function CCFMiscUtil_CreatePropSet(): PropertySet

declare var utils: SiebelApp.Utils

declare var SiebelApp: {
    S_App: Application
    EventManager: {
        fireEvent(eventName: string, event: any): void
        addListner(eventName: string, handler: (event: any) => void, scope?: any): void
        removeListner(eventName: string, handler: (event: any) => void, scope?: any)
        cleanListners(eventName: string): void
    }
    CommandManager: {
        GetInstance(): any
    }
    Constants: {
        get(name: string): any
        set(name: string, value: string): boolean
        isDefined(name: string): boolean
    }
}

declare var SiebelAppFacade: {
    ComponentMgr: {
        CompleteComponent(e,t,r): any
        DeRegisterLevel(e): any
        DeleteComponent(e,t): any
        DisplayTree(e,n): any
        FindComponent(e): any
        MakeComponent(e,t,r,i): any
        RegisterLevel(e,n): any
        Show(e): any
    }
}

declare namespace SiebelApp {
    interface Utils {
        Trim(str: string): string
        LTrim(str: string): string
        RTrim(str: string): string
        IsEmpty(some: any): boolean
        IsTrue(some: any): boolean
    }

    interface UIStatus {
        Free(): UIStatus
        Busy(): UIStatus
        IsBusy(): boolean
    }

    interface Service {
        InvokeMethod(name: string, inputs?: PropertySet, asyncOrConfig?: boolean | ServiceConfig): PropertySet
        CanInvokeMethod(name: string): boolean
    }

    interface PopupPModel extends SiebelAppFacade.PresentationModel {
        Init()
        IsPopupStarted()
        PostExecute(e,t,n)
        Setup(e)
    }
}

declare namespace SiebelAppFacade {
    interface BasePM {
        AddMethod(t,n,r): void
        AddProperty(t,n,r): any
        AddValidator(e,t): any
        AttachEventHandler(e,t,n): any
        AttachNotificationHandler(t,n,r): any
        AttachPMBinding(t,n,r): any
        AttachPSHandler(t,n,r): any
        AttachPostProxyExecuteBinding(t,n,r): any
        AttachPreProxyExecuteBinding(t,n,r): any
        DecorateEventHandlers(): any
        EndLife(): any
        ExecuteMethod(e): any
        Get(e,t): any
        HandleNotify(e): any
        HandlePostExecute(e,t,n): any
        HandlePreExecute(e,t,n): any
        HandleResponsePS(e): any
        Init(): any
        OnControlEvent(e): any
        SetProperty(t,n,r): any
        Setup(n): any
        Show(): any
    }

    interface PresentationModel extends BasePM {
        Init(): any
        Setup(n): any
        UpdateModel(e): any
    }

    interface Component {
        EndLife(): any
        ExecuteMethod(): any
        Get(): any
        GetChildren(): any
        GetParent(): any
        GetSiblings(): any
        Init(): any
        Setup(e,t,n): any
        SetupComplete(e,t): any
        Show(): any
        SwitchPMnPR(t,n): any
    }
}

declare namespace SiebelJS {
    function Namespace(name: string): void
    function Dependency(name: string): any
    function Extend<T, S>(target: T, superclass: S): T & S
}

interface Application {
    readonly uiStatus: SiebelApp.UIStatus
    readonly shadow: ApplicationShadow
    GetProfileAttr(name: String): String | null
    GetService(name: string): SiebelApp.Service
    NewPropertySet(): PropertySet
}

interface ApplicationShadow {
    ActiveApplet(): any
    ActiveBusComp(): any
    ActiveBusObject(): any
    ActiveViewName(): any
    FindApplet(name): any
    FindBusObject(name): any
    GetProfileAttr(name): any
    GetSRN(): any
    GetService(name): any
    InvokeMethod(name, inputPropSet): any
    IsReady(): any
    Name(): any
    NewPropertySet(): any
    SWEAlert(text): any
    SeblTrace(category, trcMessage): any
    SetProfileAttr(name, value): any
    ShowModalDialog(url, argin, options): any
    TriggerUPTEvent(inputPropSet): any
}

interface PropertySet {
    // Serialization related
    // Decode functions works with side effect
    DecodeFromString(serializedPropertySet: string): boolean
    DecodeFromStringOld(oldFashionSerializedPropertySet: string): boolean
    EncodeAsString(): string
    EncodeAsStringOld(): string

    // Hierarchy handling
    GetChild(index: number): PropertySet
    GetChildByType(type: string, isChildren?: boolean): PropertySet | null
    GetChildCount(): number
    RemoveChild(index: number): boolean

    // Properties Related
    GetFirstProperty(): string | null
    GetNextProperty(): string | null
    GetProperty(name: string): string
    SetProperty(name: string, value: string): boolean
    RemoveProperty(name: string): void
    GetPropertyCount(): number

    // Typ
    GetType(): string
    SetType(type: string): boolean

    // Value
    GetValue(): string
    SetValue(value: string): boolean

    // Misc
    Clone(): PropertySet
    IsEmpty(): boolean
    Reset(): void
}

interface ServiceConfig {
    async: boolean
    scope: any
    selfbusy: boolean
    mask: boolean
    npr: boolean
    cb(methodName: string, inputs?: PropertySet, asyncOrConfig?: boolean | ServiceConfig): void
}

