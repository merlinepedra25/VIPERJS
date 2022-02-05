export default {
  "app.payloadandhandler.lhost_rule": "Please enter the IP address of the Lhost",
  "app.payloadandhandler.port_rule": "Please enter a port",
  "app.payloadandhandler.rhost_rule": "Please enter the IP address of the Rhost",
  "app.payloadandhandler.alert_1": "Reverse_http can not bypassav. It is recommended to use reverse_https",
  "app.payloadandhandler.alert_2": "Do not open reverse_tcp and reverse_tcp_rc4 ports (like 80,443) to internet to prevent DDoS attacks",
  "app.payloadandhandler.luri_tip": "Custom URI Prefix",
  "app.payloadandhandler.luri_rule": "Please enter a custom URI",
  "app.payloadandhandler.pem_tip": "Please select a certificate file in PEM format. For the contents of the file, please refer to www.example.com.pem in <File>. The certificate file needs to contain both public and private keys. After configuring the certificate, HTTP requests will be automatically filtered",
  "app.payloadandhandler.pem_label": "SSL Certificate",
  "app.payloadandhandler.pem_rule": "Please select a certificate file",
  "app.payloadandhandler.comm_tip": "Use the selected session as the traffic forwarder. The selected session establishes local listening, receives the connection request from payload, and then forwards the traffic to viper",
  "app.payloadandhandler.comm_label": "Reverse Channel",
  "app.payloadandhandler.ssl_tip": "Verify SSL Certificate in meterpreter (Only valid for reverse_winhttps and Linux types reverse_https handler)",
  "app.payloadandhandler.ssl_label": "Verification Certificate",
  "app.payloadandhandler.rc4password": "RC4 Password",
  "app.payloadandhandler.rc4password_rule": "Please enter the RC4 password, which is more than 8 digits",
  "app.payloadandhandler.domain": "Domain parameter. e.g.: Manually specify the NS server of aaa.com as ns1.bbb.com ns2.bbb.com, then enter aaa.com here",
  "app.payloadandhandler.domain_rule": "Please enter domain",
  "app.payloadandhandler.req_type_tip": "DNS data transmission mode, dnskey has fast speed and IPv6 has strong adaptability",
  "app.payloadandhandler.req_type_rule": "DNS data transmission mode, dnskey has fast speed and IPv6 has strong adaptability",
  "app.payloadandhandler.DNSKEY": "DNSKEY (Fast speed)",
  "app.payloadandhandler.IPv6": "IPv6 (Strong adaptability)",
  "app.payloadandhandler.SERVER_ID_tip": "Viper will generates different subdomain names based on different SERVER_ID",
  "app.payloadandhandler.SERVER_ID_rule": "Please enter SERVER_ID, it is recommended to be more than 6 digits",
  "app.payloadandhandler.advance": "Advanced Param",
  "app.payloadandhandler.advance_second": "Special Param",
  "app.payloadandhandler.base": "Basic Param",
  "app.payloadandhandler.comm": "Reverse Channel By Session",
  "app.payloadandhandler.payload": "Payload",
  "app.payloadandhandler.payload_rule": "Please select payload",
  "app.payloadandhandler.handlername": "Handler Name",
  "app.payloadandhandler.handlername_ph": "Custom Handler Name",
  "app.payloadandhandler.VIRTUALHANDLER_tip": "VIPER caches the handler configuration and server will not setup real handler. This option is used to combine port forwarding with reverse shell or payload generation without start an real handler",
  "app.payloadandhandler.VIRTUALHANDLER": "Virtual Handler",
  "app.payloadandhandler.auto": "Auto",
  "app.payloadandhandler.AutoRunScript_tip": "After the session is initialized, the script will be executed automatically. Please note that this parameter only takes effect with handler, and does not take effect when used in payload",
  "app.payloadandhandler.AutoRunScript": "Automated Script Execution",
  "app.payloadandhandler.PrependMigrate": "Automatic Migrate",
  "app.payloadandhandler.PrependMigrate_tip": "Session is automatically migrated to the specified process after execution, please note 1) The payload generated by this handler must be used to take effect 2) The original process will not be closed after the migration process, and the loader file will be occupied",
  "app.payloadandhandler.PrependMigrateProc": "Automatic migration to process",
  "app.payloadandhandler.AutoUnhookProcess": "Automatic Unhook",
  "app.payloadandhandler.AutoUnhookProcess_tip": "Automatically load the unhook plugin to kill the hook operation of the process by av",
  "app.payloadandhandler.EXITONSESSION": "Automatically Turn Off",
  "app.payloadandhandler.EXITONSESSION_tip": "After the session is online,handler will automatically closed, reverse_http(s) will ignore this option",
  "app.payloadandhandler.diy": "Custom Param",
  "app.payloadandhandler.AutoVerifySessionTimeout": "Session Verification Timeout",
  "app.payloadandhandler.AutoVerifySessionTimeout_tip": "The timeout period for loading the initial load (metsrv.dll and stdapi.dll), if the network speed from the target machine to viper is poor, the value can be increased appropriately",
  "app.payloadandhandler.AutoVerifySessionTimeout_ph": "Please enter the correct verification timeout",
  "app.payloadandhandler.SessionCommunicationTimeout": "Connection Timeout (seconds)",
  "app.payloadandhandler.SessionCommunicationTimeout_ph": "Please enter the correct connection timeout",
  "app.payloadandhandler.SessionExpirationTimeout": "Session Expiration Time (seconds)",
  "app.payloadandhandler.SessionExpirationTimeout_ph": "Please enter the correct expiration time",
  "app.payloadandhandler.proxies_proto": "Proxy",
  "app.payloadandhandler.proxies_proto_tip": "The forward payload will be connected through the filled proxy, and the reverse payload cannot use the proxy",
  "app.payloadandhandler.addhandler": "Add Handler",
  "app.payloadandhandler.src.bypass.exe": "SourceCode Bypass exe",
  "app.payloadandhandler.src.bypass.exe.service": "SourceCode Bypass exe(service)",
  "app.payloadandhandler.separate.bypass.exe": "Separate Bypass exe",
  "app.payloadandhandler.separate.bypass.dll": "Separate Bypass dll",
  "app.payloadandhandler.separate.bypass.dll.mutex": "Separate Bypass dll(mutex)",
  "app.payloadandhandler.src.bypass.elf": "SourceCode Bypass elf",
  "app.payloadandhandler.separate.bypass.elf": "Separate Bypass elf",
  "app.payloadandhandler.format": "Format",
  "app.payloadandhandler.format_rule": "Please select the payload format",
  "app.payloadandhandler.http_alert": "reverse_http payload can not bypass av,recommend to use reverse_https",
  "app.payloadandhandler.ADD_HANDLER": "Auto Add Handler",
  "app.payloadandhandler.ADD_HANDLER_tip": "Generate the payload and add the corresponding handler (the generated handler cannot use the proxy and cannot be set as a permanent handler, please manually click the refresh button to refresh handler list)",
  "app.payloadandhandler.Iterations": "The number of times to encode the payload",
  "app.payloadandhandler.ForceEncode": "Force Encoding",
  "app.payloadandhandler.BadChars": "BadChars",
  "app.payloadandhandler.genpayload": "Generate Payload",
  "app.payloadandhandler.realhandler": "Real Handler",
  "app.payloadandhandler.virlhandler": "Virtual Handler",
  "app.payloadandhandler.params": "Other Param",
  "app.payloadandhandler.pemfile": "Certificate",
  "app.payloadandhandler.proxy": "Proxy",
  "app.payloadandhandler.getreal": "To Reality",
  "app.payloadandhandler.getvirl": "To Virtual",
  "app.payloadandhandler.genpe": "PE/ELF",
  "app.payloadandhandler.Detail": "Details"
};
