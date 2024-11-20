
import { Injectable } from "@angular/core"; 
import { 
    ActivatedRouteSnapshot, 
    CanActivate, 
    Router, 
    RouterStateSnapshot, 
} from "@angular/router"; 
import { AuthService } from "./shared/auth.service"; 

  
@Injectable() 
export class AuthGuard implements CanActivate { 
    constructor( 
        private authService: AuthService, 
        private router: Router
        ) { } 
    canActivate( 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Promise<boolean> { 
        var isAuthenticated = this.authService.token; 
        if (!isAuthenticated) { 
            this.router.navigate(['/adminlogin']); 
        } 
        return isAuthenticated; 
    } 
} 
