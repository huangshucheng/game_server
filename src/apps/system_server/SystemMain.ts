/*
	服务器启动文件
	注意： vscode调试服务器: 先用compile_src.bat编译成js, 再找到服务器的xxxxMain.ts文件打开，f5调试，看到日志后才算成功。
*/

import GameAppConfig from "../config/GameAppConfig"
import NetServer from "../../netengine/NetServer"
import ServiceManager from "../../netengine/ServiceManager"
import SystemService from './SystemService';
import MySqlSystem from "../../database/MysqlSystem"
import MySqlGame from '../../database/MySqlGame';
import Stype from '../protocol/Stype';

var system_server = GameAppConfig.system_server;
NetServer.start_tcp_server(system_server.host, system_server.port, false);
ServiceManager.register_service(Stype.S_TYPE.System, SystemService);

var game_database = GameAppConfig.game_database;

//系统服务
MySqlSystem.connect(game_database.host, game_database.port, game_database.db_name, game_database.uname, game_database.upwd);
//游戏服务
MySqlGame.connect(game_database.host, game_database.port, game_database.db_name, game_database.uname, game_database.upwd);