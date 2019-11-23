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

    /**
     * Attaches an event handler to an even
     */
    AttachEventHandler(eventName: string, handler: (...args: any[]) => boolean): boolean
    AttachNotificationHandler(t,n,r): any
    AttachPMBinding(t,n,r): any
    AttachPSHandler(t,n,r): any
    AttachPostProxyExecuteBinding(t,n,r): any
    AttachPreProxyExecuteBinding(t,n,r): any
    DecorateEventHandlers(): any
    EndLife(): any
    ExecuteMethod(e): any
    Get(name: string): any
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
    AttachPMBinding(e,t,n): void
    BindData(): void
    BindEvents(): void
    CacheState(e,t): void
    EndLife(): void
    Init(): void
    ShowUI(): void
}

export class BasePhysicalRenderer extends BasePR {}

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