//机器人服务

import ServiceBase from "../../netbus/ServiceBase"
import RobotModel from "./RobotModel";
import Log from '../../utils/Log';

class RobotService extends ServiceBase {
    service_name: string = "RobltService";

    //收到客户端发来的(当前作为服务端)
    static on_recv_client_player_cmd(session: any, stype: number, ctype: number, utag: number, proto_type: number, raw_cmd: any) {
        RobotModel.getInstance().recv_cmd_msg(session, stype, ctype, utag, proto_type, raw_cmd);
    }

    //收到连接的服务发过来的数据（当前作为客户端）
    static on_recv_server_player_cmd(session: any, stype: number, ctype: number, utag: number, proto_type: number, raw_cmd: any): void {
        Log.info("robot on_recv_server_player_cmd")
    }

    // 收到客户端断开连接;
    static on_player_disconnect(session: any, stype: number): void {
        Log.info("robot on_player_disconnect")
    }
}

export default RobotService;