import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router"

@Injectable({ "providedIn": "root" })
export class EventCanActivateService implements CanActivate {
    canActivate(router: ActivatedRouteSnapshot) {
        let id = +router.params["id"];
        return  id > 0 && id < 6;
    }
}