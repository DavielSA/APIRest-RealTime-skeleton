import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Session } from './session';



@Injectable()
export class API {

    protected sSession: Session;
    private BaseURL: string;
    constructor(
        @Inject(HttpClient) protected http: HttpClient
    ) {
        this.sSession = new Session();
        this.BaseURL = "http://localhost:3000/";
    }

    /**
     * Obtenemos la url base. Se puede autorellenar de un fichero .env,
     * pero para desarrollo la estoy usando a hardcode
     */
    protected getBaseUrl():string{
        return this.BaseURL;
    }

    /**
     * 
     * @param url Generamos la url absoluta
     */
    protected getUrl(url:string):string{
        return this.BaseURL + url;
    }

    /**
     * Generamos un objeto header para asignar el token y el tipo de datos.
     */
    private MakeHeader(): HttpHeaders {
        const token: string = this.sSession.getAuth();
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": token
        });
    }

    /**
     * Metodo genérico GET.
     * @param sUrl string   | URL a la cual haremos la petición GET
     */
    protected Get(sUrl: string): Promise<object> {
        const header: HttpHeaders = this.MakeHeader();
        return this.http.get(this.BaseURL + sUrl, { headers: header }).toPromise()
    }

    /**
     * Metodo genérico POST.
     * @param sUrl string   | URL a la cual haremos la petición POST
     * @param body object   | Cuerpo de la petición.
     */
    protected Post(sUrl: string, body: any): Promise<object> {
        const header: HttpHeaders = this.MakeHeader();
        return this.http.post(this.BaseURL + sUrl, JSON.stringify(body), { headers: header }).toPromise()
    }

    /**
     * Metodo genérico PUT.
     * @param sUrl string   | URL a la cual haremos la petición PUT
     * @param body object   | Cuerpo de la petición
     */
    protected Put(sUrl: string, body: any): Promise<object> {
        const header: HttpHeaders = this.MakeHeader();
        return this.http.put(this.BaseURL + sUrl, JSON.stringify(body), { headers: header }).toPromise()
    }

    /**
     * Metodo genérico DELETE.
     * @param sUrl string   | URL a la cual haremos la petición DELETE.
     */
    protected Delete(sUrl: string): Promise<object> {
        const header: HttpHeaders = this.MakeHeader();
        return this.http.delete(this.BaseURL + sUrl, { headers: header }).toPromise()
    }
}