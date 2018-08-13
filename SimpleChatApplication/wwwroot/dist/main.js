(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/Message.model.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/Message.model.ts ***!
  \*****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/pl */ "./node_modules/@angular/common/locales/pl.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/signalr.service */ "./src/app/services/signalr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_9___default.a, 'pl');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]
            ],
            imports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__["AngularFontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pl' }, _services_signalr_service__WEBPACK_IMPORTED_MODULE_10__["SignalrService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{max-width:1170px; margin:auto;}\r\nimg{ max-width:100%;}\r\n.inbox_people {\r\n  background: #f8f8f8 none repeat scroll 0 0;\r\n  float: left;\r\n  overflow: hidden;\r\n  width: 40%; border-right:1px solid #c4c4c4;\r\n}\r\n.inbox_msg {\r\n  border: 1px solid #c4c4c4;\r\n  clear: both;\r\n  overflow: hidden;\r\n}\r\n.top_spac{ margin: 20px 0 0;}\r\n.recent_heading {float: left; width:50%;}\r\n.srch_bar {\r\n  display: inline-block;\r\n  text-align: right;\r\n  width: 50%; \r\n}\r\n.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}\r\n.recent_heading h4 {\r\n  color: #05728f;\r\n  font-size: 16px;\r\n  margin: auto;\r\n}\r\n.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:75%; padding:2px 0 4px 6px; background:none;}\r\n.srch_bar .input-group-addon button {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  padding: 0;\r\n  color: #707070;\r\n  font-size: 18px;\r\n}\r\n.srch_bar .input-group-addon { margin: 0 0 0 -27px;}\r\n.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}\r\n.chat_ib h5 span{ font-size:13px; float:right;}\r\n.chat_ib p{ font-size:14px; color:#989898; margin:auto}\r\n.chat_img {\r\n  float: left;\r\n  width: 11%;\r\n}\r\n.chat_ib {\r\n  float: left;\r\n  padding: 0 0 0 15px;\r\n  width: 88%;\r\n}\r\n.chat_people{ overflow:hidden; clear:both;  cursor: pointer;}\r\n.chat_list {\r\n  border-bottom: 1px solid #c4c4c4;\r\n  margin: 0;\r\n  padding: 18px 16px 10px;\r\n}\r\n.inbox_chat { height: 550px; overflow-y: scroll;}\r\n.active_chat{ background:#ebebeb;}\r\n.incoming_msg_img {\r\n  display: inline-block;\r\n  width: 6%;\r\n}\r\n.received_msg {\r\n  display: inline-block;\r\n  padding: 0 0 0 10px;\r\n  vertical-align: top;\r\n  width: 92%;\r\n }\r\n.received_withd_msg p {\r\n  background: #ebebeb none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  color: #646464;\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 5px 10px 5px 12px;\r\n  width: 100%;\r\n}\r\n.time_date {\r\n  color: #747474;\r\n  display: block;\r\n  font-size: 12px;\r\n  margin: 8px 0 0;\r\n}\r\n.received_withd_msg { width: 57%;}\r\n.mesgs {\r\n  float: left;\r\n  padding: 30px 15px 0 25px;\r\n  width: 60%;\r\n}\r\n.sent_msg p {\r\n  background: #05728f none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  margin: 0; color:#fff;\r\n  padding: 5px 10px 5px 12px;\r\n  width:100%;\r\n}\r\n.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\r\n.sent_msg {\r\n  float: right;\r\n  width: 46%;\r\n}\r\n.input_msg_write input {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  color: #4c4c4c;\r\n  font-size: 15px;\r\n  min-height: 48px;\r\n  width: 100%;\r\n}\r\n.type_msg {border-top: 1px solid #c4c4c4;position: relative;}\r\n.msg_send_btn {\r\n  background: #05728f none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  height: 33px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 11px;\r\n  width: 33px;\r\n}\r\n.messaging { padding: 0 0 50px 0;}\r\n.msg_history {\r\n  height: 630px;\r\n  overflow-y: scroll;\r\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"text-center mt-3\">Czat</h3>\n  <hr>\n  <div class=\"messaging\">\n        <div class=\"inbox_msg\">\n          <div class=\"inbox_people\">\n            <div class=\"headind_srch\">\n              <div class=\"recent_heading\">\n                <h4>Dostępne konwersacje</h4>\n              </div>\n              <div class=\"srch_bar\">\n                <div class=\"stylish-input-group\">\n                  <button (click)=\"onCreateGroup()\" class=\"btn btn-sm btn-primary\">Utwórz konwersację</button></div>\n              </div>\n            </div>\n            <div class=\"inbox_chat\">\n              <div \n              (click)=\"onSelectedGroup(group)\" \n              [ngClass]=\"{'active_chat': group.id == selectedGroupId }\" \n              class=\"chat_list\" \n              *ngFor=\"let group of groups\">\n                <div class=\"chat_people\">\n                  <div class=\"chat_img\"> <img src=\"data:image/png;base64,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\" alt=\"sunil\"> </div>\n                  <div class=\"chat_ib\">\n                    <h5>{{ group.id }}</h5>\n                    <p>Za pomocą powyższego ciągu znaków możesz komunikować się ze znajomymi.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr>\n            <form (ngSubmit)=\"onJoinToGroup(joinToGroupForm)\" #joinToGroupForm=\"ngForm\">\n              <div class=\"form-group\">\n                <input \n                required \n                name=\"groupId\" \n                class=\"form-control\" \n                ngModel\n                placeholder = \"Wpisz id konwersacji, aby dołączyć do już istniejącej\"\n                #groupId = \"ngModel\">\n                <span *ngIf=\"!groupId.valid && groupId.touched\" class=\"d-block text-danger mt-1 ml-1\">Proszę podać identyfikator grupy.</span>\n                <span *ngIf=\"error\" class=\"d-block text-danger mt-1 ml-1\">{{ error }}</span>\n                <button \n                type=\"submit\"\n                [disabled]=\"!joinToGroupForm.valid\" \n                class=\"btn btn-sm btn-primary float-right m-2\">Dołącz</button>\n              </div>\n            </form>\n          </div>\n          <div class=\"mesgs\">\n            <div class=\"msg_history\" #scrollMe>\n              <ng-container  *ngFor=\"let message of incommingMessages\" >\n                <div *ngIf=\"message.groupId == selectedGroupId\" [ngClass]=\"{\n                  'outgoing_msg': message.isMyMessage,\n                  'incoming_msg': !message.isMyMessage}\">\n                  <div [ngClass]=\"{\n                    'sent_msg': message.isMyMessage,\n                    'received_msg': !message.isMyMessage}\">\n                    <div [ngClass]=\"{\n                      'received_withd_msg': !message.isMyMessage}\">\n                      <p>{{ message.body }}</p>\n                      <span class=\"time_date\"> {{ message.dateOfDispatch | date:'shortTime' }} | {{ message.dateOfDispatch | timeAgo }} </span>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            \n            <div class=\"type_msg\">\n              <div class=\"input_msg_write\">\n                <input [disabled]=\"!selectedGroupId\" type=\"text\" class=\"write_msg\" placeholder=\"Wpisz treść wiadomości\" [(ngModel)]=\"messageValue\" #messageBody (keyup.enter)=\"onSendMessage(messageBody.value)\" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"text-center top_spac\"> Oprawa graficzna bazuje na motywie zaprojektowanym przez <a target=\"_blank\" href=\"#\">Sunil Rajput</a></p>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _Models_Message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Message.model */ "./src/app/Models/Message.model.ts");
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/signalr.service */ "./src/app/services/signalr.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _models_group_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/group.model */ "./src/app/models/group.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(messageService, signalrService, groupService) {
        this.messageService = messageService;
        this.signalrService = signalrService;
        this.groupService = groupService;
        this.groups = [];
        this.incommingMessages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.scrollToBottom();
        this.error = '';
        this.incommingMessages = this.signalrService.reciveMessage();
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.prototype.onSendMessage = function (messageBody) {
        var _this = this;
        var message = new _Models_Message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]();
        message.body = messageBody;
        message.connectionId = this.signalrService.connectionId;
        message.groupId = this.selectedGroupId;
        this.messageService.sendMessage(message).subscribe(function (resp) {
            _this.messageValue = '';
        }, function (err) {
            console.log('Erros occured during adding routine: ', err);
        });
    };
    ChatComponent.prototype.onCreateGroup = function (connectionId) {
        var _this = this;
        console.log('Creating group for connectionId: ' + this.signalrService.connectionId);
        this.groupService.createNewGroup(this.signalrService.connectionId).subscribe(function (resp) {
            var group = new _models_group_model__WEBPACK_IMPORTED_MODULE_5__["Group"]();
            group.id = resp.id;
            _this.selectedGroupId = resp.id;
            _this.groups.push(group);
        }, function (err) {
            console.log('Erros occured during create new group: ', err);
        });
    };
    ChatComponent.prototype.onJoinToGroup = function (form) {
        var _this = this;
        var groupId = form.value.groupId;
        console.log('Joining to group: ' + groupId);
        this.groupService.joinToExistingGroup(this.signalrService.connectionId, groupId).subscribe(function (resp) {
            var group = new _models_group_model__WEBPACK_IMPORTED_MODULE_5__["Group"]();
            group.id = groupId;
            _this.selectedGroupId = groupId;
            _this.groups.push(group);
            _this.error = '';
            form.reset();
        }, function (err) {
            _this.error = "Nie uda\u0142o si\u0119 do\u0142\u0105czy\u0107 do grupy.\n          Upewnij si\u0119 czy wskazana grupa istnieje lub czy przypadkiem ju\u017C do niej nie nale\u017Cysz.";
            form.reset();
        });
    };
    ChatComponent.prototype.onSelectedGroup = function (group) {
        this.selectedGroupId = group.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"], _services_signalr_service__WEBPACK_IMPORTED_MODULE_3__["SignalrService"], _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/environment.ts":
/*!********************************!*\
  !*** ./src/app/environment.ts ***!
  \********************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    globalBaseUrl: 'https://simplechatapplication.azurewebsites.net'
    // globalBaseUrl: 'http://localhost:5000'
};


/***/ }),

/***/ "./src/app/models/group.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/group.model.ts ***!
  \***************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());



/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
        this.baseUrl = _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].globalBaseUrl + '/api/Groups/';
    }
    GroupService.prototype.createNewGroup = function (connectionId) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.baseUrl + 'CreateNewGroup', JSON.stringify(connectionId), options);
    };
    GroupService.prototype.joinToExistingGroup = function (connectionId, groupId) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        var groupDto = {
            connectionId: connectionId,
            id: groupId
        };
        return this.http.post(this.baseUrl + 'JoinToExistingGroup', JSON.stringify(groupDto), options);
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesService = /** @class */ (function () {
    function MessagesService(http) {
        this.http = http;
        this.baseUrl = _environment__WEBPACK_IMPORTED_MODULE_2__["environment"].globalBaseUrl + '/api/Messages/';
    }
    MessagesService.prototype.ngOnInit = function () { };
    MessagesService.prototype.sendMessage = function (message) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.baseUrl, JSON.stringify(message), options);
    };
    MessagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/services/signalr.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/signalr.service.ts ***!
  \*********************************************/
/*! exports provided: SignalrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalrService", function() { return SignalrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignalrService = /** @class */ (function () {
    function SignalrService() {
        var _this = this;
        console.log('New instance of signalr was created.');
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl(_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].globalBaseUrl + '/chat')
            .build();
        this._hubConnection
            .start()
            .then(function () { return console.log('Connection started!'); })
            .catch(function (err) { return console.log('Error while establishing connection :('); });
        this._hubConnection.on('OnConnected', function (connectionId) {
            _this.connectionId = connectionId;
            console.log('Your connectionId is: ' + connectionId.toString());
        });
    }
    SignalrService.prototype.reciveMessage = function () {
        var _this = this;
        var incommingMessages = [];
        this._hubConnection.on('MessageRecive', function (message) {
            if (_this.connectionId !== message.connectionId) {
                message.isMyMessage = false;
                incommingMessages.push(message);
            }
            else {
                message.isMyMessage = true;
                incommingMessages.push(message);
            }
        });
        return incommingMessages;
    };
    SignalrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], SignalrService);
    return SignalrService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mariusz\source\repos\SimpleChatApplication\SimpleChatApplication\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map