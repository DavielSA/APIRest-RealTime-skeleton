"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(app) {
        this.app = app;
        this.app.get("/login/v1", this.Getv1);
    }
    Getv1(req, res) {
        const result = [
            { id: 1, nombre: "Daviel" },
            { id: 2, nombre: "Daily" }
        ];
        return res.json(result);
    }
}
exports.default = Auth;
//# sourceMappingURL=ctrl.login.js.map