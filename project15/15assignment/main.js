var guest_list = ['amir', 'azam', 'mehmood', 'saba', 'sana'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('RESPECT SIR/MADAM ' + guest_list[i] + ",\nwe invited ou on dinner tomorrow.\n\nThank you");
}
var not_present = 'amir';
var new_guest = 'babar azam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('RESPECT SIR/MADAM ' + guest_list[i] + ",\nwe invited ou on dinner tomorrow.\n\nThank you");
}
console.log("mr. ".concat(not_present, " will not coming tomorrow dinner."));
