"use strict";
/*
    服务器启动文件
    注意： vscode调试服务器: 先用compile_src.bat编译成js,再找到服务器的xxxxMain.ts文件打开，f5调试，看到日志后才算成功。
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var NetBus_1 = __importDefault(require("../../../netbus/NetBus"));
var ServiceManager_1 = __importDefault(require("../../../netbus/ServiceManager"));
var Stype_1 = require("../../protocol/Stype");
var GameAppConfig_1 = __importDefault(require("../../config/GameAppConfig"));
var GameBallService_1 = __importDefault(require("./GameBallService"));
var game_room_server = GameAppConfig_1["default"].game_room_server_1;
NetBus_1["default"].start_tcp_server(game_room_server.host, game_room_server.port, false);
ServiceManager_1["default"].register_service(Stype_1.Stype.GameHoodle, GameBallService_1["default"]);
//# sourceMappingURL=GameBallMain.js.map