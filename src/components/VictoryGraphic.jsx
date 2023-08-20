import { VictoryPie, VictoryLabel, VictoryLegend } from "victory";

export default function VictoryGraphic({ percentageAhorro, percentagePfinal }) {
  return (
    <>
      <VictoryPie
        colorScale={["#43DB92", "#FB1818"]}
        height={300}
        width={300}
        data={[
          { x: "P.Final", y: percentagePfinal },
          { x: "Ahorro", y: percentageAhorro },
        ]}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={-45} textAnchor="middle" />}
        animate={{
          duration: 1500,
        }}
      ></VictoryPie>
      <VictoryLegend
        x={125}
        y={10}
        colorScale={["#43DB92","#FB1818"]}
        height={60}
        
        orientation="horizontal"
        gutter={20}
        style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
        data={[{ name: "Precio Final" }, { name: "Ahorro" }]}
      />
    </>
  );
}
