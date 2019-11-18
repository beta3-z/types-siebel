declare var Siebel: Environment
declare var SiebelAppFacade: object
declare var SiebelJS: {
    Namespace(): void
    Dependency(name: string): any
    Extend(child: Function, parent: Function): Function
}
declare var utils: Utils

declare function theApplication(): ApplicationShadow
declare function IsOpenUI(): boolean
declare function IsOfflineModeEnabled(): boolean
declare function SWEGotoView(viewName: string): void
declare function doNothing(): void
declare function Namespace(name: string): void

export interface Environment {
    S_App: Application
    CommandManager: {
        GetInstance(): object
    }
    Constants: {
        get(name: string): any
        set(name: string, value: string): boolean
        isDefined(name: string): boolean
    }
    Utils
    Service
}

export interface Application {
    uiStatus: UIStatus
    shadow: ApplicationShadow
    GetProfileAttr(name: String): String | null
    GetService(name: string): Service
    NewPropertySet(): PropertySet
}

export interface ApplicationShadow {

}

export interface Utils {
    Trim(str: string): string
    LTrim(str: string): string
    RTrim(str: string): string
    IsEmpty(some: any): boolean
    IsTrue(some: any): boolean
}

export interface UIStatus {
    Free(): UIStatus
    Busy(): UIStatus
    IsBusy(): boolean
}

export interface PropertySet {
    // Serialization related
    // Decode functions works with side effect
    DecodeFromString(serializedPropertySet: string): boolean
    DecodeFromStringOld(oldFashionSerializedPropertySet: string): boolean
    EncodeAsString(): string
    EncodeAsStringOld(): string

    // Hierarchy handling
    GetChild(index: number): PropertySet
    GetChildByType(type: string): PropertySet | null
    GetChildByType(type: string, isChildren: boolean): PropertySet | null
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

export interface Service {
    InvokeMethod(name: string): PropertySet
    InvokeMethod(name: string, inputs: PropertySet): PropertySet
    InvokeMethod(name: string, inputs: PropertySet, async: boolean): PropertySet
    InvokeMethod(name: string, inputs: PropertySet, config: ServiceConfig): PropertySet
    CanInvokeMethod(name: string): boolean
}

export interface ServiceConfig {
    async: boolean
    scope: any
    selfbusy: boolean
    mask: boolean
    npr: boolean
    cb(): void
    cb(methodName: string): void
    cb(methodName: string, inputs: PropertySet): void
    cb(methodName: string, inputs: PropertySet, async: boolean): void
    cb(methodName: string, inputs: PropertySet, config: ServiceConfig): void
}

export interface PresentationModel {
    GetRenderer(): PhysicalRenderer
    AddMethod(name: string, handler: () => void): boolean
    AddMethod(name: string, handler: () => void, config: {scope: any, sequence: boolean}): boolean
}

export interface PhysicalRenderer {
    Init(): void
    Setup(): void
    Show(): void
}