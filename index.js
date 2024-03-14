function receivesAFunction(one){
    return one();
}
function mn(){
    return function(){return 1 + 120 + 2};
}
function myNumber(){
    return mn();
}
function returnsANamedFunction(){
    return myNumber;
};
function returnsAnAnonymousFunction(){
    return function(){return 1+2};

};