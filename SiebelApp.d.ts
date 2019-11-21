import {PresentationModel} from './SiebelAppFacade';

export as namespace SiebelApp

export var EventManager: {
    fireEvent(eventName: string, event: any): void
    addListner(eventName: string, handler: (event: any) => void, scope?: any): void
    removeListner(eventName: string, handler: (event: any) => void, scope?: any)
    cleanListners(eventName: string): void
}

export var CommandManager: {
    GetInstance(): any
}

export var Constants: {
    get(name: string): any
    set(name: string, value: string): boolean
    isDefined(name: string): boolean
}

export class Utils {
    Trim(str: string): string
    LTrim(str: string): string
    RTrim(str: string): string
    IsEmpty(some: any): boolean
    IsTrue(some: any): boolean
}

export class UIStatus {
    Free(): UIStatus
    Busy(): UIStatus
    IsBusy(): boolean
}

export class Service {
    InvokeMethod(name: string, inputs?: PropertySet, asyncOrConfig?: boolean | AjaxConfig): PropertySet
    CanInvokeMethod(name: string): boolean
}

export class PopupPModel extends PresentationModel {
    Init()
    IsPopupStarted()
    PostExecute(e,t,n)
    Setup(e)
}

export namespace S_App {
    export var uiStatus: UIStatus

    export function GetActiveBusObject(): BusObj
    export function GetName(): string
    export function GetProfileAttr(name: String): String | null
    export function GetService(name: string): Service
    export function NewPropertySet(): PropertySet
    export function GetActiveView(): View
    export function GetMainView(): View
    export function GotoView(view: string, viewId: string, url: string, target: string): void

    /**
     * @desc calls the Siebel Server, and then returns the Login page to the client.
     *
     */
    export function LogOff(): void

    /**
     * @param name identifies the name of the method that InvokeMethod calls.
     * @param ps is an object that contains a property set that InvokeMethod sends as input to the method that it calls, if
     required.
     * @param ajaxInformation is an object that contains information about how to run AJAX.
     *
     */
    export function InvokeMethod(name: string, ps: string, ajaxInformation: object): any

    export class View {
        GetApplet(name: string): Applet
        GetActiveApplet(): Applet
        GetAppletArray(): Applet[]
        GetAppletMap(): Applet[]
        GetBusObj(): BusObj
        GetName(): string
        GetTitle(): string
        IsAppletActive(applet: Applet): boolean
        RemoveApplet(applet: Applet): boolean
        SetActiveApplet(applet: Applet): boolean
        SetActiveAppletByName(name: string): boolean
    }

    export class Applet {
        GetControls(): AppletControl[]
        GetName(): string

    }

    export class AppletControl {}

    export class ListApplet extends Applet {}

    export class BusObj {
        GetBusComp(name: string): BusComp
        GetView(): View
    }

    export class BusComp {
        CanDelete(): boolean
        CanInsert(): boolean
        CanUpdate(): boolean
        CanMergeRecords(): boolean
        InvokeMethod(name: string, inputs?: PropertySet): any
        DeleteRecord(): any
        CopyRecord() : any
        GetFieldValue(name: string): string
        GetFieldSearchSpec(name: string): string
        NewRecord(): any
        NextRecord(): any
        RedoRecord(): any
        UndoRecord(): any
        SetFieldValue(name: string, value: string): boolean
        SetFieldSearchSpec(name: string, searchSpec: string): boolean
        WriteRecord(): any
    }
}

interface AjaxConfig {
    /** @desc has no effect because of linear execution order of Object Manager */
    async?: boolean
    scope?: any
    selfbusy?: boolean
    mask?: boolean
    npr?: boolean
    cb?(methodName: string, inputs?: PropertySet, asyncOrConfig?: boolean | AjaxConfig): void
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