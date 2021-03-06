"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_nvd3_1 = require('./ng2-nvd3');
var Ng2Nvd3Module = (function () {
    function Ng2Nvd3Module() {
    }
    Ng2Nvd3Module = __decorate([
        core_1.NgModule({
            declarations: [ng2_nvd3_1.nvD3Component],
            exports: [ng2_nvd3_1.nvD3Component]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Nvd3Module);
    return Ng2Nvd3Module;
}());
exports.Ng2Nvd3Module = Ng2Nvd3Module;
