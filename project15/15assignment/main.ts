
let guest_list: string[] = ['amir','azam','mehmood','saba','sana'];
for(let i=0; i<guest_list.length; i++){
    console.log('RESPECT SIR/MADAM ' + guest_list[i] + `,\nwe invited you on dinner tomorrow.\n\nThank you`);
}
let not_present : string ='amir';
let new_guest : string ='babar azam';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('RESPECT SIR/MADAM ' + guest_list[i] + `,\nwe invited you on dinner tomorrow.\n\nThank you`);
}
console.log(`mr. ${not_present} will not coming tomorrow dinner.`)



