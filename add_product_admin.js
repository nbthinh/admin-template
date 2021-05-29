function add_configuration(){
    let config_admin_frame = document.getElementById("config_admin_frame");
    let count_config = document.getElementById("count_config");
    let num_of_config = Number(count_config.innerHTML) + 1;
    let new_config = create_config(num_of_config);
    config_admin_frame.append(new_config[0]); config_admin_frame.append(new_config[1]);
    count_config.innerHTML = num_of_config;
}
function create_config(num_of_config){
    let div1 = document.createElement("div"); div1.setAttribute("class", "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12");
    let label1 = document.createElement("label"); label1.innerHTML = "Đặc điểm " + num_of_config; 
    let input1 = document.createElement("input"); input1.setAttribute("type", "text"); input1.setAttribute("class", "form-control"); input1.setAttribute("name", "description_" + num_of_config);
    div1.append(label1); div1.append(input1);
    let div2 = document.createElement("div"); div2.setAttribute("class", "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12");
    let label2 = document.createElement("label"); label2.innerHTML = "Thông số kỹ thuật " + num_of_config;
    let input2 = document.createElement("input"); input2.setAttribute("type", "text"); input2.setAttribute("class", "form-control"); input2.setAttribute("name", "param_" + num_of_config);
    div2.append(label2); div2.append(input2);
    return [div1, div2];
}