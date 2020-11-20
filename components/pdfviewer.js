import React from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
    wordWrap: 'break-word'
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4,
    marginBottom: 4,
    width:'33%',
  },
  header: {
    fontSize: 8,
    marginBottom: 20,
    textAlign: 'left',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document Component
export default function MyDocument (props) {
  return (
  <PDFViewer height="660" width="100%">
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        Year: {props.bi.submission_year} Week: {props.bi.submission_week} ID: {props.bi.bi_id} Status: {props.bi.current} Benefactor: {props.bi.benefactor} Initial Impact: {props.bi.initial_impact}  FA: {props.bi.fa} FA Approver: {props.bi.fa_approver} FA date: {props.bi.fa_date} RA: {props.bi.ra} RA Assessor: {props.bi.ra_assessor} RA date: {props.bi.ra_date} Action: {props.bi.action} Action Owner: {props.bi.action_owner} Action Date: {props.bi.action_date} W/Denied Action: {props.bi.with_deniedAction} Implementation: {props.bi.implementation} Implementor: {props.bi.implementor} Implementation Date: {props.bi.implementation_date}
      </Text>
      <Text style={styles.title}>{props.bi.title}</Text>
      <Text style={styles.author}>Employee No. : {props.bi.creator} | Shift: {props.bi.shift} | SPS Team: {props.bi.sps_team}</Text>
      <Text style={{textAlign:'center', fontSize: '12', color: 'gray'}}>Before</Text>
      <Image
        style={styles.image}
        src={`http://10.3.10.209:4546/images/${props.bi.before_imgPath}`}
      />
      {
        props.bi.after_imgPath ? (
          <>
            <Text style={{textAlign:'center', fontSize: '12', color: 'gray'}}>After</Text>
            <Image
              style={styles.image}
              src={`http://10.3.10.209:4546/images/${props.bi.after_imgPath}`}
            />
          </>
        ):(
          <></>
        )
      }
      <Text style={styles.subtitle}>
        {props.bi.title}
      </Text>
      <Text style={styles.text}>
        {props.bi.proposal}
      </Text>
      <Text style={styles.text}>
      </Text>
    </Page>
  </Document>
  </PDFViewer>
  )
}