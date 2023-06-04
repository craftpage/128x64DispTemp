basic.forever(function () {
    kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.show("TEMP:", 1, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.show(input.temperature(), 1, kitronik_VIEW128x64.ShowAlign.Centre)
    kitronik_VIEW128x64.show("C", 1, kitronik_VIEW128x64.ShowAlign.Right)
})
