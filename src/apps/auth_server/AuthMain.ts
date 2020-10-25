/*
	服务器启动文件
	注意： vscode调试服务器: 先用compile_src.bat编译成js, 再找到服务器的xxxxMain.ts文件打开，f5调试，看到日志后才算成功。
*/

import GameAppConfig from '../config/GameAppConfig';
import NetServer from "../../netengine/NetServer"
import AuthService from "./AuthService"
import ServiceManager from "../../netengine/ServiceManager"
import MySqlAuth from "../../database/MySqlAuth"
import Stype from '../protocol/Stype';
import RedisAuthCenter from '../../database/RedisAuth';


let auth_server = GameAppConfig.auth_server;
NetServer.start_tcp_server(auth_server.host, auth_server.port, false);
ServiceManager.register_service(Stype.S_TYPE.Auth, AuthService);

let db_auth = GameAppConfig.auth_database;
MySqlAuth.connect(db_auth.host, db_auth.port, db_auth.db_name, db_auth.uname, db_auth.upwd);

let auth_redis = GameAppConfig.auth_center_redis;
RedisAuthCenter.connect(auth_redis.host, auth_redis.port, auth_redis.db_index);