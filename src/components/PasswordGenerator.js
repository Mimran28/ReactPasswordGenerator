import React, { useEffect, useState } from "react";
const PasswordGenerator =()=>{
const [length,setLength] = useState(8);
const [numAllow,setNumAllow] = useState(false);
const [charAllow,setCharAllow] = useState(false);
const [password ,setPassword] = useState('');
const[copied,setCopied] =useState(false);
const passGen =()=>{
    let str = "ABCDEFGHIJKLMNOabcdefghipqrstuvwxyz"
    let pass= ""
    let num = '0123456789'
    let char = '!@#$%^&*()_+'
    if(numAllow) str += num;
    if(charAllow) str += char;

    for(let i=1; i<=length; i++){
        let randomNum = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(randomNum)
    }
    setPassword(pass);
    setCopied(false)
   
}

const copyToClip = ()=>{
    window.navigator.clipboard.writeText(password)
   setCopied(true)
}
useEffect(passGen,[length,numAllow,charAllow])
        return (
        <div className="flex justify-center w-full h-screen bg-black text-white text-center">
            <div className="bg-slate-400 p-3 w-6/12 h-max mt-10 rounded-xl">
    <h1 className="font-bold text-3xl mb-4">Passoword generator</h1>
    <div className="flex w-100 box-border p-5">
    <input className="w-full p-3 rounded-s-xl text-black" type="text" placeholder="password" readOnly value={password}/>
    <button className="bg-green-500 rounded-e-xl p-3" onClick={copyToClip}>{copied?"Copied":"Copy"}</button>
    </div>
    <div className="flex items-center justify-around">
    <div className="flex items-center gap-1">
    <input className="accent-sky-600 " type="range" value={length} min={8} max={24} onChange={(e)=>setLength(e.target.value)}/>
    <label>Length {length}</label>
    </div>
    <div className="flex items-center gap-1">
    <input className="accent-sky-600" type="checkbox" defaultChecked={numAllow}  onChange={()=>setNumAllow(prev=>!prev)}/>
    <label>Numbers</label>
    </div>
    <div className="flex items-center gap-1">
    <input className="accent-sky-600" type="checkbox" defaultChecked={charAllow} onChange={()=>setCharAllow(prev=>!prev)}/>
    <label>Characters</label>
    </div>
    </div>
            </div>
        </div>
    );

}


export default PasswordGenerator; 