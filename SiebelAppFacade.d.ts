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