patch_name = "设备和打印机";

patch_i18n = {
    "Device Setup Manager":"设备安装管理",
    "Service":"服务",
    "Enable the native 'Safely Remove Hardware(Eject USB Device)' feature":"原生安全移除硬件(弹出USB设备)功能",
    "MTP(Share files with smart phone via USB)":"MTP(USB连接手机进行文件共享)",
    "RNDIS(Access internet with smart phone via USB)":"RNDIS(USB连接手机使用手机共享网络)",
    "Printers":"打印机",
    "Bluetooth":"蓝牙",
    "Camera":"摄像头"
}

if ($app_host_lang == $lang) {
    $patches_opt['_message.wait_for_printers'] = '                   打印机将在2分钟后工作                  ';
}
