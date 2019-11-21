import {Utils} from './SiebelApp'

declare function theApplication(): ShadowApplication
declare function IsOpenUI(): boolean
declare function IsOfflineModeEnabled(): boolean
declare function SWEGotoView(viewName: string): void
declare function doNothing(): void
declare function Namespace(name: string): void

declare var utils: Utils

interface ShadowApplication {
    ActiveApplet(): ShadowApplet
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

interface ShadowApplet {
    ActiveMode(): any
    BusComp(): any
    BusObject(): any
    FindActiveXControl(controlName): any
    FindControl(controlName): any
    InvokeMethod(name, inputPropSet): any
    Name(): any
    ReInit(): any
}
