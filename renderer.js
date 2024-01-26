function formatDevice(devices) {
    return devices.map(device => device.productName).join('<hr>')
}

async function testIT() {
    document.getElementById('granted-devices').innerHTML = formatDevice(await navigator.hid.getDevices())
    document.getElementById('granted-devices2').innerHTML = formatDevice(await navigator.hid.requestDevice({filters: []}))
}
document.getElementById('clickme').addEventListener('click', testIT)