export default interface INetworkEngine {
  host() : boolean;
  join(ip: string) : void;
  disconnect() : void;
}
