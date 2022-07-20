namespace CodeLib{
//% blockId=CodeLib_PrintNumber block="数字显示定时"
    //% color="#006400"
    //% weight=87
    //% blockGap=10
    //% 数字.min=0 数字.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
export function 数字显示定时 (数字: number) {
    basic.showNumber(数字)
    basic.clearScreen()
}

    //% blockId=CodeLib_HelloWorld block="HelloWorld"
    //% color="#006400"
    //% weight=87
    //% blockGap=10    
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function HelloWorld() {
        basic.showString("Hello World!")        
        basic.clearScreen()
    }

}
