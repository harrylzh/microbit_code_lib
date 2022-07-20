namespace CodeLib{
    
    //% blockId=CodeLib_PrintNumber block="数字显示定时|value1 %数字"
    //% color="#006400"    
    //% weight=97
    //% blockGap=10
    //% value1.min=0 value1.max=255 
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function PrintNumber (value1: number) {
    basic.showNumber(value1)    
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
