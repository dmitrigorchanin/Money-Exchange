// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var Zero = {};
    var Error = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    if (currency>10000){
        return Error;
    }
    if (currency==0){
        return Zero;
    }
    if (currency<0){
        return Zero;
    }
    var Exchange = {};

    if (currency>=50){
        Exchange["H"]=Math.floor(currency/50);
        if (currency%50==0){
            return Exchange;
        }
        else {
            if (currency%50>=25){
                Exchange["Q"]=Math.floor(currency%50/25);
                if ((currency%50)%25==0){
                    return Exchange;
                }
                else {
                    if ((currency%50)%25>=10){
                        Exchange["D"]=Math.floor((currency%50)%25/10);
                        if (((currency%50)%25)%10==0){
                            return Exchange;
                        }
                        else {
                            if (((currency%50)%25)%10>=5){
                                Exchange["N"]=Math.floor(((currency%50)%25)%10/5);
                                if ((((currency%50)%25)%10)%5==0){
                                    return Exchange
                                }
                                else{
                                    Exchange["P"]=(((currency%50)%25)%10)%5;
                                    return  Exchange;
                                }
                            }
                            if (((currency%50)%25)%10<5){
                                Exchange["P"]=((currency%50)%25)%10;
                                return Exchange;
                            }
                        }
                    }
                    else {
                        if ((currency%50)%25>=5){
                            Exchange["N"]=Math.floor((currency%50)%25/5);
                            if (((currency%50)%25)%5==0){
                                return Exchange
                            }
                            else{
                                Exchange["P"]=((currency%50)%25)%5;
                                return  Exchange;
                            }
                        }
                        if ((currency%50)%25<5){
                            Exchange["P"]=(currency%50)%25;
                            return Exchange;
                        }
                    }
                }
            }
            else {
                if ((currency%50)%25>=10){
                    Exchange["D"]=Math.floor((currency%50)%25/10);
                    if (((currency%50)%25)%10==0){
                        return Exchange;
                    }
                    else {
                        if (((currency%50)%25)%10>=5){
                            Exchange["N"]=Math.floor(((currency%50)%25)%10/5);
                            if ((((currency%50)%25)%10)%5==0){
                                return Exchange
                            }
                            else{
                                Exchange["P"]=(((currency%50)%25)%10)%5;
                                return  Exchange;
                            }
                        }
                        if (((currency%50)%25)%10<5){
                            Exchange["P"]=((currency%50)%25)%10;
                            return Exchange;
                        }
                    }
                }
                else {
                    if ((currency%50)%25>=5){
                        Exchange["N"]=Math.floor((currency%50)%25/5);
                        if (((currency%50)%25)%5==0){
                            return Exchange
                        }
                        else{
                            Exchange["P"]=((currency%50)%25)%5;
                            return  Exchange;
                        }
                    }
                    if ((currency%50)%25<5){
                        Exchange["P"]=(currency%50)%25;
                        return Exchange;
                    }
                }
            }
        }

    }
    if (currency<50&&currency>=25){
        Exchange["Q"]=Math.floor(currency/25);
        if (currency%25==0){
            return Exchange;
        }
        else {
            if (currency%25>=10){
                Exchange["D"]=Math.floor(currency%25/10);
                if ((currency%25)%10==0){
                    return Exchange;
                }
                else {
                    if ((currency%25)%10>=5){
                        Exchange["N"]=Math.floor((currency%25)%10/5);
                        if (((currency%25)%10)%5==0){
                            return Exchange
                        }
                        else{
                            Exchange["P"]=((currency%25)%10)%5;
                            return  Exchange;
                        }
                    }
                    if ((currency%25)%10<5){
                        Exchange["P"]=(currency%25)%10;
                        return Exchange;
                    }
                }
            }
            else {
                if (currency%25>=5){
                    Exchange["N"]=Math.floor(currency%25/5);
                    if ((currency%25)%5==0){
                        return Exchange
                    }
                    else{
                        Exchange["P"]=(currency%25)%5;
                        return  Exchange;
                    }
                }
                if (currency%25<5){
                    Exchange["P"]=currency%25;
                    return Exchange;
                }
            }
            
        }

    }
    if (currency<25&&currency>=10){
        Exchange["D"]=Math.floor(currency/10);
        if (currency%10==0){
            return Exchange;
        }
        else {
            if (currency%10>=5){
                Exchange["N"]=Math.floor(currency%10/5);
                if ((currency%10)%5==0){
                    return Exchange
                }
                else{
                    Exchange["P"]=(currency%10)%5;
                    return  Exchange;
                }
            }
            if (currency%10<5){
                Exchange["P"]=currency%10;
                return Exchange;
            }
        }
    }
    if (currency<10&&currency>=5){
        Exchange["N"]=Math.floor(currency/5);
        if (currency%5==0){
            return Exchange
        }
        else{
            Exchange["P"]=currency%5;
            return  Exchange;
        }
    }
    if (currency<5){
        Exchange["P"]=currency;
        return Exchange;
    }
}
