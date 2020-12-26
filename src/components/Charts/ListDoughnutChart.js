import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import _ from "lodash";

const options = {
  legend: {
    reverse: true,
  },
};

const ListDoughnutChart = (props) => {
  const { list } = props;

  const data = {
    labels: ["Done!", "Not Done"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          _.filter(list, (listitem) => {
            if (listitem.complete) return listitem;
          }).length,
          _.filter(list, (listitem) => {
            if (!listitem.complete) return listitem;
          }).length,
        ],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, {})(ListDoughnutChart);
