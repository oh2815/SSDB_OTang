let writer = document.querySelector('#writer')
let content = document.querySelector('#content')
let table = document.querySelector('#table')

function writeNote() {
    let wrtTd = document.createElement('td')
    let cttTd = document.createElement('td')
    let dtTd = document.createElement('td')
    let tr = document.createElement('tr')

    const now = new Date()
    const nYear = now.getFullYear()
    const nMonth = now.getMonth()
    const nDate = now.getDate()
    const nHour = now.getHours()
    const nMin = now.getMinutes()

    wrtTd.innerText = writer.value
    cttTd.innerText = content.value
    dtTd.innerText = `${nYear}년 ${nMonth}월 ${nDate}일  ${nHour} : ${nMin}`
    tr.append(wrtTd,cttTd,dtTd)
    table.append(tr)

    writer.value = "";
    content.value = "";
}