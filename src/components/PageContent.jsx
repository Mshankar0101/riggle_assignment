import React from 'react';
import '../styles/PageContent.css';
import Menu from '../common/Menu';
import { MdOutlineFileDownload } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PageContent = () => {
  const data = [
    { month: 'Apr', target: 50, achieved: 45 },
    { month: 'May', target: 40, achieved: 35 },
    { month: 'Jun', target: 35, achieved: 30 },
    { month: 'Jul', target: 45, achieved: 40 },
    { month: 'Aug', target: 35, achieved: 30 },
    { month: 'Sep', target: 50, achieved: 45 },
    { month: 'Oct', target: 45, achieved: 40 },
    { month: 'Nov', target: 40, achieved: 35 },
    { month: 'Dec', target: 35, achieved: 30 },
  ];

  const teamData = [
    {
      id: 1,
      name: "Arjun Kumar",
      role: "MD",
      target: 11,
      achieved: 9.5,
    },
    {
      id: 2,
      name: "Ravi Mehta",
      role: "MD",
      target: 11,
      achieved: 8.5,
    },
    {
      id: 3,
      name: "Anil Joshi",
      role: "ASM",
      target: 11,
      achieved: 9,
    },
    {
      id: 4,
      name: "Rajesh Singh",
      role: "ASM",
      target: 11,
      achieved: 8,
    },
    {
      id: 5,
      name: "Deepak Patel",
      role: "SO",
      target: 11,
      achieved: 7.5,
    },
  ];

  return (
    <div className="page-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <Menu />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="filter-container">
          <div className="filter-options">
            <select className="filter-select">
              <option value="">Month</option>
            </select>
            
            <select className="filter-select">
              <option value="">State</option>
            </select>
            
            <select className="filter-select">
              <option value="">City</option>
            </select>
          </div>

          <button className="target-report-btn">
            <MdOutlineFileDownload/>
            <span>Target Report</span>
          </button>
        </div>
        
        <div className="sales-snapshot">
          <h2>Sales Snapshot</h2>
          <div className="graph-container">
            <ResponsiveContainer width="100%"  height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis ticks={[0, 20, 40, 60, 80, 100]} domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="target" fill="#FF8042" name="Target" />
                <Bar dataKey="achieved" fill="#39CEF3" name="Achieved" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="team-snapshot">
          <h2>TEAM SNAPSHOT</h2>
          <div className="team-cards-container">
            <div className="team-card">
              <h3>TEAM PERFORMANCE</h3>
              <div className="team-list">
                {teamData.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-info">
                      <div className="member-avatar"></div>
                      <div className="member-details">
                        <p className="member-name">{member.name} ({member.role})</p>
                        <p className="member-stats">
                          Target: {member.target} | Achieved: {member.achieved}
                        </p>
                      </div>
                    </div>
                    <div className="progress-indicator">95%</div>
                  </div>
                ))}
              </div>
              <button className="view-all">View All</button>
            </div>

            <div className="team-card">
              <h3>NEW ACTIVATION</h3>
              <div className="team-list">
                {teamData.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-info">
                      <div className="member-avatar"></div>
                      <div className="member-details">
                        <p className="member-name">{member.name} ({member.role})</p>
                        <p className="member-stats">
                          Target: {member.target} | Achieved: {member.achieved}
                        </p>
                      </div>
                    </div>
                    <div className="progress-indicator">85%</div>
                  </div>
                ))}
              </div>
              <button className="view-all">View All</button>
            </div>

            <div className="team-card">
              <h3>SKU PERFORMANCE</h3>
              <div className="team-list">
                {teamData.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-info">
                      <div className="member-avatar"></div>
                      <div className="member-details">
                        <p className="member-name">{member.name} ({member.role})</p>
                        <p className="member-stats">
                          Target: 5,000 | Achieved: 3,500
                        </p>
                      </div>
                    </div>
                    <div className="progress-indicator">90%</div>
                  </div>
                ))}
              </div>
              <button className="view-all">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
