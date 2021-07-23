import { injectable } from "inversify";
import INetworkEngine from "../INetworkEngine";

@injectable()
export default class WebRtcNetworkEngine implements INetworkEngine {
  private hostIp?: string;
  private peerConnection: RTCPeerConnection = new RTCPeerConnection();

  host(): boolean {
    this.peerConnection.addEventListener('connectionstatechange', event => {
      if (this.peerConnection.connectionState === 'connected') {
        // Peers connected!
      }
    });
    //this.peerConnection.createOffer();
    //this.peerConnection.setLocalDescription();

    return false;
  }

  join(ip: string): void {
    this.hostIp = ip;
  }

  disconnect(): void {
    this.hostIp = undefined;
  }
}
