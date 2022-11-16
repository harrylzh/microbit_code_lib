namespace CodeLib{
    export enum enColor {
        //% blockId="OFF" block="OFF"
        OFF = 0,
        //% blockId="Red" block="Red"
        Red,
        //% blockId="Green" block="Green"
        Green,
        //% blockId="Blue" block="Blue"
        Blue,
        //% blockId="White" block="White"
        White,
        //% blockId="Cyan" block="Cyan"
        Cyan,
        //% blockId="Pinkish" block="Pinkish"
        Pinkish,
        //% blockId="Yellow" block="Yellow"
        Yellow,
    }


    //% blockId=CodeLib_PrintNumber block="闪现数字| %value1"
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

    //% blockId=CodeLib_LedRGB block="RGB|pinRed %pinRed|pinGreen %pinGreen|pinBlue %pinBlue|value %value"
    //% weight=1
    //% blockGap=20
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function LedRGB(pinRed: DigitalPin, pinGreen: DigitalPin, pinBlue: DigitalPin, value: enColor): void {

        switch (value) {
            case enColor.OFF: {
                pins.digitalWritePin(pinRed, 0);
                pins.digitalWritePin(pinGreen, 0);
                pins.digitalWritePin(pinBlue, 0);
                break;
            }
            case enColor.Red: {
                pins.digitalWritePin(pinRed, 1);
                pins.digitalWritePin(pinGreen, 0);
                pins.digitalWritePin(pinBlue, 0);
                break;
            }
            case enColor.Green: {
                pins.digitalWritePin(pinRed, 0);
                pins.digitalWritePin(pinGreen, 1);
                pins.digitalWritePin(pinBlue, 0);
                break;
            }
            case enColor.Blue: {
                pins.digitalWritePin(pinRed, 0);
                pins.digitalWritePin(pinGreen, 0);
                pins.digitalWritePin(pinBlue, 1);
                break;
            }
            case enColor.White: {
                pins.digitalWritePin(pinRed, 1);
                pins.digitalWritePin(pinGreen, 1);
                pins.digitalWritePin(pinBlue, 1);
                break;
            }
            case enColor.Cyan: {
                pins.digitalWritePin(pinRed, 0);
                pins.digitalWritePin(pinGreen, 1);
                pins.digitalWritePin(pinBlue, 1);
                break;
            }
            case enColor.Pinkish: {
                pins.digitalWritePin(pinRed, 1);
                pins.digitalWritePin(pinGreen, 0);
                pins.digitalWritePin(pinBlue, 1);
                break;
            }
            case enColor.Yellow: {
                pins.digitalWritePin(pinRed, 1);
                pins.digitalWritePin(pinGreen, 1);
                pins.digitalWritePin(pinBlue, 0);
                break;
            }
        }
    }

}
