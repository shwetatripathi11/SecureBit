// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { ListGroup, Button, Col, Row } from 'react-bootstrap';
// import { downloadResult } from '../actions/studentRegistrationAction';
// import { getScoreOfAllStudents } from '../actions/testAction';
// import BarCharts from '../utils/BarCharts';
// import DoughnutChart from '../utils/DoughnutChart';
// import download from 'downloadjs';
// import { bgcolor, bordercolor } from '../utils/Color';
// import { base64StringToBlob } from 'blob-util';

// const Statistics = ({ id }) => {
//   const [scorelable, setScorelable] = useState([]);
//   const [scoredata, setScoredata] = useState([]);
//   const [bgColor, setbgColor1] = useState([]);
//   const [borColor, setborColor1] = useState([]);
//   const [passData, setPassData] = useState([0, 0]);
//   const [statData, setStatData] = useState([0, 0, 0, 0, 0, 0]);
//   const [totalStudents, setTotalStudents] = useState(0);

//   const { paper } = useSelector(state => state.singleTestPaper);
//   useEffect(() => {
//     if (paper) getStudentsMarks();
//   }, [paper]);

//   const getStudentsMarks = async () => {
//     const resultData = await getScoreOfAllStudents(id);
//     setTotalStudents(resultData.length);
//     if (resultData) {
//       let p = 0;
//       let f = 0;
//       let p90_100 = 0;
//       let p80_90 = 0;
//       let p70_80 = 0;
//       let p60_70 = 0;
//       let p50_60 = 0;
//       let below50 = 0;
//       var pc = 0;
//       var maxi = -1;
//       resultData.map((d, i) => {
//         pc = (d.score / paper.maxMarks) * 100;
//         if (pc >= 91) {
//           p90_100++;
//         } else if (pc >= 81) {
//           p80_90++;
//         } else if (pc >= 71) {
//           p70_80++;
//         } else if (pc >= 61) {
//           p60_70++;
//         } else if (pc >= 50) {
//           p50_60++;
//         } else {
//           below50++;
//         }

//         if (d.score >= d.maxMarks / 3) {
//           p++;
//         } else {
//           f++;
//         }

//         if (d.score > maxi) {
//           maxi = d.score;
//         }
//       });

//       var dp = [];
//       var label = [];
//       var bgColor1 = [];
//       var borcolor1 = [];

//       for (let i = 0; i <= maxi; i++) {
//         dp.push(0);
//         label.push(i);
//         bgColor1.push(bgcolor[i]);
//         borcolor1.push(bordercolor[i]);
//       }

//       resultData.map((d, i) => {
//         dp[d.score]++;
//       });

//       setScorelable(label);
//       setScoredata(dp);
//       setbgColor1(bgColor1);
//       setborColor1(borcolor1);
//       setPassData([f, p]);
//       setStatData([p90_100, p80_90, p70_80, p60_70, p50_60, below50]);
//     }
//   };

//   const downloadResultHandler = async id => {
//     const str = await downloadResult(id);
//     var blob = base64StringToBlob(
//       str,
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//     );

//     download(
//       blob,
//       'Result.xlsx',
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//     );
//   };
//   return (
//     <>
//       <ListGroup variant="flush">
//         <ListGroup.Item>
//           <Row>
//             <Col md={2}>
//               <Button
//                 className="btn btn-block"
//                 variant="outline-danger"
//                 onClick={() => downloadResultHandler(id)}
//               >
//                 Download
//               </Button>
//             </Col>
//             <Col md={10}>
//               <p style={{ fontSize: '20px' }}>
//                 Dowload the test result excel sheet
//               </p>
//             </Col>
//           </Row>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <p>Score/No of Student</p>
//           Total No of students : {totalStudents}
//           <BarCharts
//             barData={{
//               labels: scorelable,
//               datasets: [
//                 {
//                   label: 'Scores',
//                   data: scoredata,
//                   backgroundColor: bgColor,
//                   borderColor: borColor,
//                   borderWidth: 1,
//                 },
//               ],
//             }}
//           />
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <Row style={{ position: 'center' }}>
//             <Col>
//               <p>Percentage Wise Category</p>
//               <DoughnutChart
//                 DoughnutData={{
//                   labels: [
//                     '91% to 100%',
//                     '81% to 90%',
//                     '71% to 80%',
//                     '61% to 70%',
//                     '50% to 60%',
//                     'Below 50%',
//                   ],
//                   datasets: [
//                     {
//                       label: 'Percentage wise category',
//                       data: statData,
//                       backgroundColor: [
//                         bgcolor[0],
//                         bgcolor[1],
//                         bgcolor[2],
//                         bgcolor[3],
//                         bgcolor[4],
//                         bgcolor[5],
//                       ],
//                       borderColor: [
//                         bordercolor[0],
//                         bordercolor[1],
//                         bordercolor[2],
//                         bordercolor[3],
//                         bordercolor[4],
//                         bordercolor[5],
//                       ],
//                       borderWidth: 1,
//                     },
//                   ],
//                 }}
//               />
//             </Col>
//           </Row>
//         </ListGroup.Item>
//       </ListGroup>
//     </>
//   );
// };

// export default Statistics;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, Button, Col, Row } from "react-bootstrap";
import { downloadResult } from "../actions/studentRegistrationAction";
import { getScoreOfAllStudents } from "../actions/testAction";
import BarCharts from "../utils/BarCharts";
import DoughnutChart from "../utils/DoughnutChart";
import download from "downloadjs";
import { bgcolor, bordercolor } from "../utils/Color";
import { base64StringToBlob } from "blob-util";

const Statistics = ({ id }) => {
  const [scorelable, setScorelable] = useState([]);
  const [scoredata, setScoredata] = useState([]);
  const [bgColor, setbgColor1] = useState([]);
  const [borColor, setborColor1] = useState([]);
  const [passData, setPassData] = useState([0, 0]);
  const [statData, setStatData] = useState([0, 0, 0, 0, 0, 0]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [cheatingLogs, setCheatingLogs] = useState([]); // NEW state for cheating logs

  const { paper } = useSelector((state) => state.singleTestPaper);

  useEffect(() => {
    if (paper) getStudentsMarks();
  }, [paper]);

  useEffect(() => {
    fetch(`/api/cheatingLog/${id}`)
      .then((res) => res.json())
      .then((data) => setCheatingLogs(data))
      .catch((err) => console.error("Error fetching logs:", err));
  }, [id]);

  const getStudentsMarks = async () => {
    const resultData = await getScoreOfAllStudents(id);
    setTotalStudents(resultData.length);
    if (resultData) {
      let p = 0,
        f = 0;
      let p90_100 = 0,
        p80_90 = 0,
        p70_80 = 0,
        p60_70 = 0,
        p50_60 = 0,
        below50 = 0;
      let maxi = -1;

      resultData.forEach((d) => {
        const pc = (d.score / paper.maxMarks) * 100;
        if (pc >= 91) p90_100++;
        else if (pc >= 81) p80_90++;
        else if (pc >= 71) p70_80++;
        else if (pc >= 61) p60_70++;
        else if (pc >= 50) p50_60++;
        else below50++;

        if (d.score >= d.maxMarks / 3) p++;
        else f++;

        if (d.score > maxi) maxi = d.score;
      });

      let dp = Array(maxi + 1).fill(0);
      let label = Array.from({ length: maxi + 1 }, (_, i) => i);
      let bgColor1 = label.map((_, i) => bgcolor[i]);
      let borcolor1 = label.map((_, i) => bordercolor[i]);

      resultData.forEach((d) => {
        dp[d.score]++;
      });

      setScorelable(label);
      setScoredata(dp);
      setbgColor1(bgColor1);
      setborColor1(borcolor1);
      setPassData([f, p]);
      setStatData([p90_100, p80_90, p70_80, p60_70, p50_60, below50]);
    }
  };

  const downloadResultHandler = async (id) => {
    const str = await downloadResult(id);
    var blob = base64StringToBlob(
      str,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    download(
      blob,
      "Result.xlsx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
  };

  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <Button
                className="btn btn-block"
                variant="outline-danger"
                onClick={() => downloadResultHandler(id)}
              >
                Download
              </Button>
            </Col>
            <Col md={10}>
              <p style={{ fontSize: "20px" }}>
                Download the test result excel sheet
              </p>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <p>Score/No of Students</p>
          Total No of students: {totalStudents}
          <BarCharts
            barData={{
              labels: scorelable,
              datasets: [
                {
                  label: "Scores",
                  data: scoredata,
                  backgroundColor: bgColor,
                  borderColor: borColor,
                  borderWidth: 1,
                },
              ],
            }}
          />
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>
              <p>Percentage Wise Category</p>
              <DoughnutChart
                DoughnutData={{
                  labels: [
                    "91% to 100%",
                    "81% to 90%",
                    "71% to 80%",
                    "61% to 70%",
                    "50% to 60%",
                    "Below 50%",
                  ],
                  datasets: [
                    {
                      label: "Percentage wise category",
                      data: statData,
                      backgroundColor: bgcolor.slice(0, 6),
                      borderColor: bordercolor.slice(0, 6),
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </Col>
          </Row>
        </ListGroup.Item>

        {/* New Cheating Logs Section */}
        <ListGroup.Item>
          <h3>Cheating Logs</h3>
          <table border="1" style={{ width: "100%", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>No Face Count</th>
                <th>Cell Phone Count</th>
                <th>Prohibited Objects</th>
                <th>Multiple Faces Count</th>
              </tr>
            </thead>
            <tbody>
              {cheatingLogs.length > 0 ? (
                cheatingLogs.map((log) => (
                  <tr key={log._id}>
                    <td>{log.studentId?.name || "Unknown"}</td>
                    <td>{log.noFaceCount}</td>
                    <td>{log.cellPhoneCount}</td>
                    <td>{log.ProhibitedObjectCount}</td>
                    <td>{log.multipleFaceCount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No cheating detected</td>
                </tr>
              )}
            </tbody>
          </table>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Statistics;

