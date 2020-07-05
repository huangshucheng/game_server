"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ProtoManager_1 = __importDefault(require("../../netbus/ProtoManager"));
var CommonProto_1 = __importDefault(require("../protocol/CommonProto"));
var Log_1 = __importDefault(require("../../utils/Log"));
var Stype_1 = require("../protocol/Stype");
var DataBaseProto_1 = require("../protocol/DataBaseProto");
var DataModelSystem = /** @class */ (function () {
    function DataModelSystem() {
        var _a;
        this._cmd_handler_map = {};
        this._cmd_handler_map = (_a = {},
            _a[CommonProto_1["default"].eUserLostConnectRes] = this.on_player_lost_connect,
            _a);
    }
    DataModelSystem.getInstance = function () {
        return DataModelSystem.Instance;
    };
    DataModelSystem.prototype.decode_cmd = function (proto_type, raw_cmd) {
        return ProtoManager_1["default"].decode_cmd(proto_type, raw_cmd);
    };
    DataModelSystem.prototype.recv_cmd_msg = function (session, stype, ctype, utag, proto_type, raw_cmd) {
        var ctypeName = ctype == CommonProto_1["default"].eUserLostConnectRes ? "UserLostConnectRes" : DataBaseProto_1.CmdName[ctype];
        Log_1["default"].info("recv_cmd_msg: stype:", Stype_1.StypeName[stype], " ,cmdName: ", ctypeName, " ,utag: ", utag);
        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, session, utag, proto_type, raw_cmd);
        }
    };
    DataModelSystem.prototype.on_player_lost_connect = function (session, utag, proto_type, raw_cmd) {
        var body = this.decode_cmd(proto_type, raw_cmd);
        Log_1["default"].info("on_player_lost_connect utag:", utag, body);
    };
    DataModelSystem.Instance = new DataModelSystem();
    return DataModelSystem;
}());
exports["default"] = DataModelSystem;
//# sourceMappingURL=DataModelSystem.js.map