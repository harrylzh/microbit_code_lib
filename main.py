@namespace
class CodeLib:
    # % blockId=CodeLib_PrintNumber block="数字显示定时|数字 %value1"
    # % color="#006400"    
    # % weight=97
    # % blockGap=10
    # % value1.min=0 value1.max=255 
    # % name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    def PrintNumber(value1: number):
        basic.show_number(value1)
        basic.clear_screen()
    # % blockId=CodeLib_HelloWorld block="HelloWorld"
    # % color="#006400"
    # % weight=87
    # % blockGap=10    
    # % name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    def HelloWorld():
        basic.show_string("Hello World!")
        basic.clear_screen()