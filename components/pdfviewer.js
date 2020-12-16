import React from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';

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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 10,
    margin: 6,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 8,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
    wordWrap: 'break-word'
  },
  image: {
    width:'50%',
  },
  imageRight: {
    width:'50%',
  },
  header: {
    fontSize: 8,
    marginBottom: 10,
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
  section: {
    width: '100%',
    display: 'table',
  },
  subsection: {
    display: 'table-row',
  },
  cellsection: {
    width: '50%',
    display: 'table-cell',
  },
  container: {
    display: 'flex',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
    '@media min-width: 400': {
      flexDirection: 'row',
    },
  },
  fixed: {
    width: '50%',
    padding: 2
  },
  flexItem: {
    flexGrow: 1,
    padding: 4,
  }
});

// Create Document Component
export default function MyDocument (props) {
  return (
  <PDFViewer height="720" width="100%">
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        Year: {props.bi.submission_year}{`    `}Week: {props.bi.submission_week} {`    `}ID: {props.bi.bi_id} {`    `}Status: {props.bi.current} {`    `}Benefactor: {props.bi.benefactor} {`    `}Initial Impact: {props.bi.initial_impact} {`    `}FA: {props.bi.fa} {`    `}FA Approver: {props.bi.fa_approver} {`    `}FA date: {props.bi.fa_date} {`    `}RA: {props.bi.ra} {`    `}RA Assessor: {props.bi.ra_assessor} {`    `}RA date: {props.bi.ra_date} {`    `}Action: {props.bi.action} {`    `}Action Owner: {props.bi.action_owner} {`    `}Action Date: {props.bi.action_date} {`    `}W/Denied Action: {props.bi.with_deniedAction} {`    `}Implementation: {props.bi.implementation} {`    `}Implementor: {props.bi.implementor} {`    `}Implementation Date: {props.bi.implementation_date}
      </Text>
      <Text style={styles.title}>{props.bi.title}</Text>
      <Text style={styles.author}>Employee No. : {props.bi.creator} {`    `} Shift: {props.bi.shift} {`    `} SPS Team: {props.bi.sps_team}</Text>
      <View style={styles.container}>
        <View style={styles.fixed}>
          <Text style={{fontSize: '12', color: 'gray'}}>Before</Text>
          <Image
            src={`http://10.3.10.209:4546/images/${props.bi.before_imgPath}`}
          />
          <Link download={`${props.bi.before_imgPath}.jpg`} href={`http://10.3.10.209:4546/images/${props.bi.before_imgPath}`} title="before">Download image</Link>
        </View>
        {
          props.bi.after_imgPath ? (
            <View style={styles.fixed}>
              <Text style={{fontSize: '12', color: 'gray'}}>After</Text>
              <Image
                src={`http://10.3.10.209:4546/images/${props.bi.after_imgPath}`}
              />
              <Link download={`${props.bi.after_imgPath}.jpg`} href={`http://10.3.10.209:4546/images/${props.bi.after_imgPath}`} title="after">Download image</Link>
            </View>
          ):(
          <View style={styles.fixed}>
            <Text style={{fontSize: '12', color: 'gray'}}>After</Text>
            <Image
              src={`/undraw_No_data_re_kwbl.png`}
              style={{width: 150, height: 150}}
            />
          </View>
          )
        }
      </View>
      <Text style={styles.subtitle}>
        Current Practice
      </Text>
      <Text style={styles.text}>
        {props.bi.current_practice}
      </Text>
      <Text style={styles.subtitle}>
        Proposal
      </Text>
      <Text style={styles.text}>
        {props.bi.proposal}
      </Text>
    </Page>
  </Document>
  </PDFViewer>
  )
}