export default function Popout(id) {
    return (
        window.open(`https://breed101.brittanyjat.com/#/breed/${id}`, 'targetWindow',
        `toolbar=no,
        location=no,
        status=no,
        menubar=no,
        scrollbars=yes,
        resizable=yes,
        width=640,
        height=480`)
    )
}

