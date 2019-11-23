import {Utils} from './SiebelApp'

declare function theApplication(): JSSApplicationShadow
declare function IsOpenUI(): boolean
declare function IsOfflineModeEnabled(): boolean
declare function SWEGotoView(viewName: string): void
declare function doNothing(): void
declare function Namespace(name: string): void

declare var utils: Utils

declare class JSSObjectBase {
    /*
    AddErrorMsg(): any
    AddErrorMsgText(): any
    CheckQuotes(): any
    ClearErrorMsg(): any
    CopyErrorMsg(): any
    EncodeQuotes(): any
    FormatString(): any
    GetErrorCode(): any
    GetErrorCount(): any
    GetErrorMsg(): any
    HasErrorMsg(): any
    LockErrorMsg(): any
    SetErrorMsg(errorCode: string, errorMessage: string): any
    SetErrorMsgText(): any
    TextToHTML(): any
    TranslateError(): any
    UnLockErrorMsg(): any
    GetApplication(): any
    */
}

declare class  JSSApplicationShadow extends JSSObjectBase {
    ActiveApplet(): JSSAppletShadow
    ActiveBusComp(): JSSBusCompShadow
    ActiveBusObject(): JSSBusObjShadow
    ActiveViewName(): string
    FindApplet(name: string): JSSAppletShadow | null
    FindBusObject(name): JSSBusObjShadow
    GetProfileAttr(name): string | null
    GetSRN(): string
    GetService(name): JSSServiceShadow
    InvokeMethod(name, inputPropSet): any
    IsReady(): boolean
    Name(): string
    NewPropertySet(): JSSPropertySet
    SWEAlert(text: string): void
    // SeblTrace(category, trcMessage): void
    SetProfileAttr(name, value): boolean
    // ShowModalDialog(url, argin, options): any
    // TriggerUPTEvent(inputPropSet): void
}

declare class JSSAppletShadow extends JSSObjectBase {
    ActiveMode(): string
    BusComp(): JSSBusCompShadow | null
    BusObject(): JSSBusObjShadow | null
    FindActiveXControl(controlName): any
    FindControl(controlName): JSSControlShadow | null
    InvokeMethod(name: string, inputPropSet: JSSPropertySet): void
    Name(): string
    ReInit(): void
}

declare class JSSBusCompShadow {
    BusObject(): JSSBusObjShadow
    GetFieldValue(name: string): string
    GetSearchExpr(): string
    GetSearchSpec(fieldName: string): string
    InvokeMethod(name: string, inputPropSet: JSSPropertySet): any
    Name(): string
    SetFieldValue(): boolean
    SetFormattedFieldValue(name: string, value: any): any
    GetFormattedFieldValue(name: string): any
    WriteRecord(): void
}

declare class JSSBusObjShadow {
    GetBusComp(name: string): JSSBusCompShadow  | null
    Name(): string
}

declare class JSSServiceShadow extends JSSObjectBase {
    InvokeMethod(name: string, inputs: JSSPropertySet): JSSPropertySet
    Name(): string
}

declare class JSSControlShadow extends JSSObjectBase {
    Applet(): JSSAppletShadow
    BusComp(): JSSBusCompShadow
    GetValue(): string
    Name(): string
    SetValue(name: string, value: string): any
    SetReadOnly(flag: boolean): any
    SetEnabled(flag: boolean): any
    SetVisible(flag: boolean): any
    SetProperty(name: string, value: string | boolean): boolean
    GetLabelProperty(name: string): string | boolean
    GetProperty(name: string): string | boolean
    SetLabelProperty(name: string, value: string | boolean): string | boolean
}

declare class JSSPropertySet {
    // Serialization related
    // Decode functions works with side effect
    DecodeFromString(serializedPropertySet: string): boolean
    DecodeFromStringOld(oldFashionSerializedPropertySet: string): boolean
    EncodeAsString(): string
    EncodeAsStringOld(): string

    // Hierarchy handling
    GetChild(index: number): JSSPropertySet
    GetChildByType(type: string, isChildren?: boolean): JSSPropertySet | null
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
    Clone(): JSSPropertySet
    IsEmpty(): boolean
    Reset(): void
}