import {JSSPropertySet} from "./index";
import {S_App} from "./SiebelApp";
import AppletControl = S_App.AppletControl;

export as namespace SiebelAppFacade

export var ComponentMgr: {
    CompleteComponent(e,t,r): any
    DeRegisterLevel(e): any
    DeleteComponent(e,t): any
    DisplayTree(e,n): any
    FindComponent(e): any
    MakeComponent(e,t,r,i): any
    RegisterLevel(e,n): any
    Show(e): any
}

export class BasePM {
    /**
     * Adds a method to a presentation model. You can use ExecuteMethod to run the method that
     * AddMethod adds from the presentation model or from the physical renderer.
     *
     * If AddMethod attempts to add a new method that the predefined client already contains, then the new method
     * becomes a customization of the predefined method, and this customization runs before or after the predefined
     * method depending on the CancelOperation part of the return value.
     *
     * A method that customizes another method can return to the caller without running the method that it customizes. To do
     * this, you configure Siebel Open UI to set the CancelOperation part of the return value to true. You set this property on
     * the ReturnStructure object that Siebel Open UI sends to each method as an argument.
     *
     * @param name is a string that contains the name of the method that Siebel Open UI adds to the presentation model
     * @param methodDef is an argument that allows you to call a method or a method reference
     * @param config
     *
     */
    AddMethod(name: string, methodDef: (...args: any[]) => void, config?: MethodConfig): boolean

    /**
     * Adds a property to a presentation model. Siebel Open UI can access it through the Get method.
     */
    AddProperty(name: string, value: any): boolean

    /**
     * Validates an event. It allows you to write a custom validation for any event.
     */
    AddValidator(eventName: string, validationFunction: (...args: any[]) => boolean): boolean

    AttachEventHandler(eventName: string, handler: (...args: any[]) => void): boolean
    AttachNotificationHandler(notificationName: string, handler: (...args: any[]) => void): boolean

    /**
     * Binds a method to an existing method. Siebel Open UI calls the method that it binds when it finishes processing this existing method.
     */
    AttachPMBinding(methodName: string, handler: (...args: any[]) => void): boolean
    AttachPSHandler(t,n,r): any

    /**
     * Binds a method that resides in a proxy or presentation model to a PostExecute method.
     * Siebel Open UI finishes the PostExecute method, and then calls the method that AttachPostProxyExecuteBinding identifies.
     */
    AttachPostProxyExecuteBinding(methodName: string, handler: (...args: any[]) => void): boolean

    /**
     * Binds a method that resides in a proxy or presentation model to a PostExecute method.
     * Siebel Open UI calls this method, and then runs PostExecute.
     */
    AttachPreProxyExecuteBinding(methodName: string, handler: (...args: any[]) => void): boolean
    EndLife(): void

    /**
     * Runs a method. You can use it to run a predefined or custom method that the presentation model contains.
     * It makes sure Siebel Open UI runs all dependency chains for the method that it calls.
     *
     * @param methodName - method which was added using AddMethod function
     * @param args - any arguments which'll be send to method handler
     */
    ExecuteMethod(methodName: string, ...args: any[]): any

    /**
     * Returns the value of the property that Siebel Open UI adds through the AddProperty method.
     *
     * @param name - added property name
     */
    Get(name: string): any

    /**
     *
     * @param controlName
     * @param displayName - the label that Siebel Open UI displays in the client for this control.
     * @param controlType - the type of SWE control, such as SWE_CTRL_TEXTAREA
     * @param controlIndex - specifies the physical location in the list control.
     */
    GetCtrlTemplate(controlName: string, displayName: string, controlType: string, controlIndex: number): any
    Init(): void

    /**
     * Call an event
     */
    OnControlEvent(eventName: string, ...args: any[]): any
    SetProperty(name: string, value: any): boolean
    Setup(propertySet: JSSPropertySet): void
    Show(): void
}

/**
 * @property sequence - if true, then Siebel Open UI calls methodName before it calls the method that already exists in the presentation model.
 * @property override - if true, then Siebel Open UI does not call the method that already exists in the presentation model
 * @property scope - describes the scope
 */
interface MethodConfig {
    sequence: boolean
    override: boolean
    scope: any
}

export class PresentationModel extends BasePM {
    Init(): any
    Setup(n): any
    UpdateModel(e): any
}

export class ListPresentationModel extends  PresentationModel {}

export class ViewPM extends PresentationModel {}

export class BasePR {
    constructor(presentationModel: BasePM)

    AttachPMBinding(methodName: string, handler: (...args: any[]) => void): boolean
    /**
     * Downloads metadata and data from the Siebel Server to the client proxy, and then binds this data to the user interface.
     */
    BindData(...args: any[]): void
    BindEvents(controls: AppletControl[]): void
    EndLife(): void
    Init(): void
    ShowUI(): void
    GetPM(): BasePM
}

/**
 * Same as BasePR
 */
export class BasePhysicalRenderer extends BasePR {}

export class PhysicalRenderer extends BasePR {
    BindControlEvents(n): any
    ControlHtmlFormatter(t,n,r,i,s,o): any
    EnableControl(control: AppletControl): void
    FocusFirstControl(): any
    FocusFirstNonEditableControl(): any
    FormatDDInQueryMode(e,t): any
    GetPhysicalControlValue(e): any
    HandleKeyEvents(e,n,r): any
    IconMapFormatter(t,n,r): any
    InjectAppletAutomationInfo(e): any
    InjectAutomationAttr(e,t): any
    InjectConfigInfo(e,t,n): any
    InvokeControlMethod(e): any
    IsValidClick(t): any
    MaskLeaveField(e,t): any
    RefreshControl(e): any
    ResetRendererState(): any
    SetControlValue(control: AppletControl, value: any): void
    SetFocusToControl(n,r): any
    ShowCollapseExpand(): any
    ShowPopup(e): any
    ShowSelection(e,n): any
    ShowUIControl(t): any
    UpdatePick(): any
    UpdateUIButtons(e): any
    UpdateUIControls(t,n): any
    onBlurCurrency(e,t): any
}

export class ViewPR extends BasePR {
    InvokeControlMethod(name: string): void
}

export class Component {
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

export class BasePW {
    constructor(control: AppletControl)
    Init(): void
    GetEl(): void
    ShowUI(): void
    BindEvents(): void
    BindData(): void
    SetValue(...args: any[]): void
    GetValue(): void
    BeginQuery(): void
    EndQuery(): void
    OpenPopup(): void
    ClosePopup(): void
    GetIconMap(e): void
    GetTextHtml(e): void
    HandleKey(e): void
    SetState(...args: any[]): void
    EndLife(): void
}

export class FieldPW extends BasePW {
    BindData(): any
    GetEl(): JQuery
    GetIconMap(): any
    GetValue(): any
    /**
     *
     * @param state
     * @param flag - indicates if the state should be reversed,
     * @param index
     */
    SetState(state: 'editable' | 'enable' | 'show' | 'focus', flag: boolean, index: number): void

    /**
     * sets the value in the DOM instance of control
     */
    SetValue(value: any, index: number): any
}

