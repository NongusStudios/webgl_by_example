// Set buttons


window.onload = function() {
    document.getElementById("home-button").onclick = function () {
        location.href = "index.html";
        console.log("Hello!");
    };
    document.getElementById("about-button").onclick = function () {
        location.href = "about.html";
    };
    document.getElementById("examples-button").onclick = function () {
        location.href = "examples.html";
    };

    document.getElementById("1_triangle").onclick = function () {
        location.href = "examples/1_triangle.html";
    };
    document.getElementById("2_cube").onclick = function () {
        location.href = "examples/2_cube.html";
    };
    document.getElementById("3_textures").onclick = function () {
        location.href = "examples/3_textures.html";
    }
    document.getElementById("4_model").onclick = function () {
        location.href = "examples/4_loading_a_model.html";
    }
    document.getElementById("5_basic_lighting").onclick = function () {
        location.href = "examples/5_basic_lighting.html";
    }
    document.getElementById("6_normal_mapping").onclick = function () {
        location.href = "examples/6_normal_mapping.html";
    }
};