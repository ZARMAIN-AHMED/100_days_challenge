 
let guest_list: string[] = ['amir','azam','mehmood','saba','sana'];
for(let i=0; i<guest_list.length; i++){
    console.log('RESPECT SIR/MADAM ' + guest_list[i] + `,\nwe invited ou on dinner tomorrow.\n\nThank you`);
}
let not_present : string ='amir';
let new_guest : string ='babar azam';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('RESPECT SIR/MADAM ' + guest_list[i] + `,\nwe invited ou on dinner tomorrow.\n\nThank you`);
}

guest_list.unshift('shaheen','sarfaraz','rizwan');
for(let i=0; i<guest_list.length; i++){
    console.log('RESPECT SIR/MADAM ' + guest_list[i] + `,\nwe invited ou on dinner tomorrow. 
    we found big table so we decide to invite 3 more guest\n\nThank you`);
}



