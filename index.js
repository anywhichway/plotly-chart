self.properties({
    connected() {
        this.shadowRoot.appendChild(document.createElement("div"));
    },
    render() {
        let json;
        try {
            json = JSON5.parse(this.textContent)
        } catch(e) {
            console.error(e,this.textContent);
            json = {data:[],layout:{},config:{}};
        }
        const {data,layout,config} = json;
        Plotly.newPlot(this.shadowRoot.firstElementChild,data,layout,config);
    }
})

/*

{ data: [
{
    x:['2020-10-04', '2021-11-04', '2023-12-04'],
    y: [90, 40, 60],
    type: 'scatter'
}
],
layout:  {
    title: 'Scroll and Zoom',
    showlegend: false
},
config: {scrollZoom: true}
}
 */