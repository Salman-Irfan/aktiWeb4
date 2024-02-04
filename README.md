<h1>Project Documentation </h1>

<h2>Project Description</h2>

<p>ye project bht acha hai</p>

<h3>Folder Structure</h3>

<p>Pges => urls</p>
<p>Api calls from services</p>
<p>Constanst folder contains the base url, api version and api endpoints</p>

<h2>Screen Shots</h2>

<img src='./assets/images/vsCodeExyension.png' />

<h1> Backend Documentation</h1>

<p> Backend ka folder structure</p>
<p>index.js starting point
    config k folder mei db connection
    routes k folder, 
    controller jis mei main business logc liki hai
    models ka folder, jis mei database k schema liky hain
</p>

<h2>Apis</h2>

<h3> Server Address: http://localhost:3000 </h3>

<h4>Api to add add product</h4>

<p>Method: post</p>
<p>endPoint: /api/v1/add-product</p>

<table>
<!-- table header -->
<tr>
    <th>Request</th>
    <th>Response</th>
</tr>

<!-- table data -->
<tr>
    <!-- request.body -->
    <td>
    <pre>
    {
        "title": "dell",
        "description": "dell ka laptop bht acha hai",
        "price": "100"
    }
    </pre>

    </td>
    <!-- response.json -->

    <td>
    <pre>
        {
            success: true,
            message: "product add ho gai hai ap ki"
        }
    </pre>
    </td>

</tr>

</table>
