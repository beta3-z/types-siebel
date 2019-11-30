import {BasePM, PresentationModel} from './SiebelAppFacade';
import {JSSPropertySet} from './index'

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
    InvokeMethod(name: string, inputs?: JSSPropertySet, asyncOrConfig?: boolean | AjaxConfig): JSSPropertySet
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

    /**
     * @returns {BusObj} the instance of currently active Business Object
     */
    export function GetActiveBusObject(): BusObj
    export function GetName(): string
    export function GetProfileAttr(name: String): String | null
    export function GetService(name: string): Service
    export function NewPropertySet(): JSSPropertySet

    /**
     * @returns {View} the instance of currently active View
     */
    export function GetActiveView(): View
    /**
     * @returns {View} the instance of currently active View
     */
    export function GetMainView(): View
    export function GotoView(view: string, viewId: string, url: string, target: string): void

    /**
     * The GenerateSrvrReq method creates a request string that Siebel Open UI sends to the Siebel Server according to the
     * current context of the application. It returns a string that includes a description of the full request.
     *
     * @param {string} command is a string that identifies the name of the command that Siebel Open UI must request
     *
     * @returns a string that contains the following information http(s)://server_name.example.com/siebel/app/callcenter/enu?SWECmd=command&SWEKeepContext=1&SWERPC=1&SRN=L8ct6oeEsPA3Cj7pF6spebyCLm2mVGpB0D0tqGMcflcb&SWEC=18&SWEActiveApplet=Client Active Applet&SWEActiveView=Client
     *
     */
    export function GenerateSrvRequest(command: string): string

    /**
     * The ClearMainView method removes values for the following items:
     *   • The view
     *   • All child objects of the view, such as applets and controls
     *   • The business object that the view references
     *   • Child objects of the business object that the view references, such as business components and business
     *     component fields
     *
     * ClearMainView only removes values for objects that reside in the client. It does not visually destroy these objects.
     * If the user attempts to use an object that ClearMainView has cleared, then Siebel Open UI might not work as expected.
     *
     */
    export function CleanMainView(): void

    /**
     * The CanInvokeMethod method that Siebel Open UI uses for application models determines whether or not Siebel Open UI
     * can invoke a method. It uses the same syntax as the CanInvokeMethod method that Siebel Open UI uses for presentation
     * models.
     *
     * @param methodName
     *
     */
    export function CanInvokeMethod(methodName: string): boolean

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
    export function InvokeMethod(name: string, ps: string, ajaxInformation: AjaxConfig): any

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
        GetControl(name: string): AppletControl | undefined
        GetControls(): AppletControl[]
        GetName(): string

        /**
         * Returns the current set of records that Siebel Open UI displays in the current applet
         */
        GetRecordSet(): object[]

        /**
         * Returns the index of the active row of the current record set
         */
        GetSelection(): number
        GetBusComp(): BusComp
        GetActiveControl(): AppletControl
        GetView(): View
        GetPModel(): BasePM
        SetActiveControl(control: AppletControl): void
    }

    export class AppletControl {
        /**
         * @returns {string} - a string that includes the name of the field where a control is configured.
         */
        GetFieldName(): string

        /**
         * Returns the index of a control. This index identifies the control position in the applet.
         */
        GetIndex(): number
        GetName(): string
        GetUIType(): string
    }

    export class ListApplet extends Applet {}

    export class BusObj {
        GetBusComp(name: string): BusComp
        GetView(): View
    }

    export class BusComp {
        CanDelete(): boolean | undefined
        CanInsert(e?: any): boolean | undefined
        CanUpdate(e?: any): boolean | undefined
        CanMergeRecords(): boolean | undefined
        InvokeMethod(name: string, inputs?: JSSPropertySet): 'Y' | 'N'
        DeleteRecord(): boolean
        CopyRecord() : any
        GetFieldValue(name: string): string
        GetFieldSearchSpec(name: string): string
        GetFieldMap(): any
        NewRecord(): boolean
        NextRecord(): boolean
        RedoRecord(): boolean
        UndoRecord(): boolean
        SetFieldValue(name: string, value: string): boolean
        SetFieldSearchSpec(name: string, searchSpec: string): boolean
        WriteRecord(): boolean
    }

    export class PluginBuilder {
        GetUIWrapper()
    }
}

interface AjaxConfig {
    /** @desc has no effect because of linear execution order of Object Manager */
    async?: boolean
    scope?: any
    selfbusy?: boolean
    mask?: boolean
    npr?: boolean
    cb?(methodName: string, inputs?: JSSPropertySet, asyncOrConfig?: boolean | AjaxConfig): void
}

