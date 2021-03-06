"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var RedisEngine_1 = __importDefault(require("../utils/RedisEngine"));
var Log_1 = __importDefault(require("../utils/Log"));
//event redis 需要重新开启一个连接
var RedisEvent = /** @class */ (function () {
    function RedisEvent() {
    }
    RedisEvent.engine = function () {
        return RedisEvent.redisEngine;
    };
    RedisEvent.connect = function (host, port, db_index) {
        RedisEvent.engine().connect(host, port, db_index);
    };
    RedisEvent.publish_msg = function (channel, message) {
        RedisEvent.engine().publish_msg(channel, message);
        Log_1["default"].info("hcc>>publish_msg:", channel, message);
    };
    RedisEvent.on_message = function (channel, func) {
        RedisEvent.engine().listen_channel(channel, func);
    };
    RedisEvent.redisEngine = new RedisEngine_1["default"]();
    RedisEvent.channel_name = {
        lobby_channel: "lobby_channel",
        game_channel: "game_channel",
        auth_channel: "auth_channel",
        gameroute_channel: "gameroute_channel"
    };
    RedisEvent.redis_lobby_channel_msg = {
        create_room: "lobby_create_room",
        join_room: "lobby_join_room",
        exit_room: "lobby_exit_room",
        dessolve_room: "lobby_dessolve_room",
        back_room: "lobby_back_room",
        lobby_user_offinle: "lobby_user_offinle"
    };
    RedisEvent.game_route_channel_msg = {
        route_connect_gameserver: "route_connect_gameserver",
        game_route_restart: "game_route_restart"
    };
    RedisEvent.redis_game_channel_msg = {};
    RedisEvent.redis_auth_channel_msg = {};
    return RedisEvent;
}());
exports["default"] = RedisEvent;
//# sourceMappingURL=RedisEvent.js.map