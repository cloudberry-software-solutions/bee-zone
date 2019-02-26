import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client';

@Component({
  selector: 'app-embedded-dashboard',
  templateUrl: './embedded-dashboard.component.html',
  styleUrls: ['./embedded-dashboard.component.css']
})
export class EmbeddedDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    const config = {
      type: 'report',
      uniqueId: '4a69c012-05b5-479d-bba2-a10b4e99143f',
      // tslint:disable-next-line:max-line-length
      embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=4a69c012-05b5-479d-bba2-a10b4e99143f&groupId=b96dce41-dcd6-48fc-bc78-739161c123c7',
      // tslint:disable-next-line:max-line-length
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1zeE1KTUxDSURXTVRQdlp5SjZ0eC1DRHh3MCIsImtpZCI6Ii1zeE1KTUxDSURXTVRQdlp5SjZ0eC1DRHh3MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGUxY2RlNDUtN2YzNi00ZmQyLTk2M2ItZjRhYTdkZjNhNjFhLyIsImlhdCI6MTU1MTIyMTA4NSwibmJmIjoxNTUxMjIxMDg1LCJleHAiOjE1NTEyMjQ5ODUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84S0FBQUFSLzM1VExmOFBDSjdvZ1ZDSktybFpFbUdicnEzMFZkUHR2Qnl0Ym5vd09RPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1MmYwNWU3NS0zYWI1LTQzN2QtOGRjZS1iODFlMzNjMDQzMWIiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik1ha2FyYSIsImdpdmVuX25hbWUiOiJKb2VsIiwiaXBhZGRyIjoiMTk3LjE4NS4xMTYuMTg2IiwibmFtZSI6IkpvZWwgTWFrYXJhIiwib2lkIjoiNjc2MzM0MTMtOGNmZC00M2Q0LWEwM2UtOTBkMjRiNWM5N2EzIiwicHVpZCI6IjEwMDMyMDAwM0QzODM1RjciLCJzY3AiOiJDYXBhY2l0eS5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkV3JpdGUuQWxsIENvbnRlbnQuQ3JlYXRlIERhc2hib2FyZC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR3JvdXAuUmVhZCBSZXBvcnQuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzdWIiOiJ4eGgyYXBKd2cteUtaZm44Sk9vVjZ2WGZaMDJQdks5VjdqS292R1pZRkg4IiwidGlkIjoiNGUxY2RlNDUtN2YzNi00ZmQyLTk2M2ItZjRhYTdkZjNhNjFhIiwidW5pcXVlX25hbWUiOiJqb2VsQGNsb3VkYmVycnkuY28uemEiLCJ1cG4iOiJqb2VsQGNsb3VkYmVycnkuY28uemEiLCJ1dGkiOiJFeC0zUjJtSlJVdWtzcnh5VU04Q0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiXX0.O86tPGUrH7LUz_o_VhxfkhSisoBNIPsfqzAqskfvVOpep11h-bFLTESbIXfn_CGwNvdirr3lXhsner-TKYifuENd3T5lwne-8fn5V4C1rxRX0wwZLG2jWna_84E7TNRr8JMnADnqEhqn4pIVfPzxxeC3D9fBsv9p0f1Bu7UdN582xKPVHAbrdaXQWj4FqR4nIESmI2NYxnrkc0xJ_f-ad2QZGAFrkMyniVnTWO6DxX1rbBFWaiWYp0IrDdJBC2knqgZ6DFzNiweglK8YGLDO_1krs-e9XOBm1756_Fxc7cP4DMMCXqs1JgOG7TsJWLfE-eR0W4iVTvCeqTcJBJMPZg'
    };

    // Grab the reference to the div HTML element that will host the report.
    const reportsContainer = <HTMLElement>document.getElementById(
      'reportsContainer'
    );

    // Embed the report and display it within the div container.
    const powerbi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory
    );
    const report = powerbi.embed(
      reportsContainer,
      config
    );

    // Report.off removes a given event handler if it exists.
    report.off('loaded');
    // Report.on will add an event handler which prints to Log window.
    report.on('loaded', function() {
      console.log('Loaded');
    });

    report.off('pageChanged');
    report.on('pageChanged', e => {
      console.log(e);
    });

    report.on('error', function(event) {
      console.log(event.detail);
      report.off('error');
  });
  }

}
